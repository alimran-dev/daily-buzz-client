import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../providers/AuthProvider";
import PropTypes from "prop-types";

const CheckoutForm = ({ price }) => {
  const [error, setError] = useState();
  const [clientSecret, setClientSecret] = useState();
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
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
      console.log("payment method error", error);
      setError(error.message);
    } else {
      console.log("Payment method", paymentMethod);
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
      console.log("confirm error", confirmError);
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
      }
    }
  };
  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: price })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      })
      .catch((error) => console.log(error));
  }, [axiosSecure, price]);

  console.log(price);
  return (
    <form className="w-1/3" onSubmit={handleSubmit}>
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
      />
      <p className="text-lg font-medium text-red-500 pt-3">{error}</p>
      <button
        className="bg-[#746C2E] py-1.5 px-10 font-semibold text-white rounded my-3 disabled:bg-opacity-60"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
CheckoutForm.propTypes = {
  price: PropTypes.number.isRequired,
};
