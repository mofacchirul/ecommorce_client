import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheakFrom from "./CheakFrom";

const stripePromise = loadStripe(import.meta.env.VITE_payment_key);
const Pay = () => {

    return (
        <Elements stripe={stripePromise}>
       <CheakFrom></CheakFrom>
        </Elements>
      );
};

export default Pay;