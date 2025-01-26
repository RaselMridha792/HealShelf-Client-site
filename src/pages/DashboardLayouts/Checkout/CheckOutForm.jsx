import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [cart] = useCart();
  const [clientSecret, setClientSecret] = useState("");
  const [TransactionId, setTransactionId] = useState("");
  const totalPrices = cart?.reduce(
    (total, item) => total + item.mainPrice * item.quantity,
    0
  );
  const totalPrice = Math.round(totalPrices * 100) / 100;

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: totalPrice })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        Swal.fire({
          title: `Payment Success!`,
          icon: "success",
          draggable: true,
        });
        setTransactionId(paymentIntent.id);
        const sellermail = cart.map((item) => item.sellerEmail);

        // save the payment to the database
        const payment = {
          email: user.email,
          price: totalPrice,
          date: new Date(),
          cartId: cart.map((item) => item._id),
          MedicineItemId: cart.map((item) => item.id),
          itemName: cart.map((item) => item.name),
          itemPrice: cart.map((item) => item.mainPrice),
          itemQuantity: cart.map((item) => item.quantity),
          sellerEmail: sellermail[0],
          transactionId: paymentIntent.id,
          status: "processing",
        };
        const res = await axiosSecure.post("/payments", payment);
        console.log("payment saved", res);
        if (res) {
          // navigate('/invoice')
        }
      }
    }
  };

  return (
    <>
      <h1 className="text-center text-3xl font-bold">
        Total Bill: ${totalPrice}
      </h1>
      <form onSubmit={handleSubmit}>
        {clientSecret && (
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          ></CardElement>
        )}
        <button
          className="btn btn-neutral btn-sm my-5"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-600">{error}</p>
        <p className="text-green-500">your transaction id: {TransactionId}</p>
      </form>
    </>
  );
};

export default CheckOutForm;
