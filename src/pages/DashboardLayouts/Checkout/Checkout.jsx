import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Stripe_PK_key)
const Checkout = () => {
  return (
    <>
      <section className="my-20">
        <h1 className="text-2xl">check out page</h1>
        <div>
            <Elements stripe={stripePromise}>
                <CheckOutForm></CheckOutForm>
            </Elements>
        </div>
      </section>
    </>
  );
};

export default Checkout;
