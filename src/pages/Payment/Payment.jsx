import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  const location = useLocation();
  const price = parseInt(location.state);
  console.log(price);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center bg-gradient-to-b from-[#746C2E] to-[#746c2eaf] text-transparent bg-clip-text py-5">
        Complete Your Payment
      </h1>
      <p className="text-center text-2xl font-semibold text-gray-600">
        Your subscription price: {price}$
      </p>
      <div className="my-10">
        <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm price={price} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
