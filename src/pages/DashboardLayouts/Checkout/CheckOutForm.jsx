import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState('');
  const {user} = useContext(AuthContext)
  const axiosSecure = useAxiosSecure();
  const  [cart] = useCart();
  const [clientSecret, setClientSecret] = useState('')
  const totalPrice = cart.reduce( (total, item)=> total + item.mainPrice, 0)



  useEffect(()=>{
    axiosSecure.post('/create-payment-intent', {price: totalPrice})
    .then(res =>{
        console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret)
    })
  },[axiosSecure, totalPrice])

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if(card == null){
        return
    }
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card
    })
    if(error){
        console.log('payment error', error)
        setError(error.message)
    }else{
        console.log('[PaymentMethod]', paymentMethod)
        setError('')
    }
  };



  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <button className="btn btn-neutral btn-sm my-5" type="submit" disabled={!stripe}>
          Pay
        </button>
        <p className="text-red-600">{error}</p>
      </form>
    </>
  );
};

export default CheckOutForm;
