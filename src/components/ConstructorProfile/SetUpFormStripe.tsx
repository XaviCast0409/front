import { useState } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = ({ name, setName, amount, handlePayment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setError(`Stripe or Elements is null`);
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardNumberElement);

    try {
      const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: 'Nombre del titular de la tarjeta',
        },
      });

      if (stripeError) {
        setError(stripeError.message || null);
        setLoading(false);
        return;
      }

      await handlePayment({
        paymentMethodId: paymentMethod.id,
        amount: amount,
      });

      await sendPaymentData(paymentMethod.id);
    } catch (e) {
      setError(`Error occurred during payment: ${e.message}`);
      setLoading(false);
      throw e;
    }
  };

  const sendPaymentData = async (paymentMethodId) => {
    try {
      const response = await axios.post("/associate-card-with-payment", {
        customerId: "ID_DEL_CLIENTE",
        cardToken: paymentMethodId,
      });

      console.log("Response from server:", response.data);
    } catch (error) {
      console.error("Error sending payment data to server:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-full max-w-md">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Nombre del titular de la tarjeta"
            className="form-control w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <CardNumberElement className="form-control" />
        </div>
        <div className="mb-4">
          <CardExpiryElement className="form-control" />
        </div>
        <div className="mb-4">
          <CardCvcElement className="form-control" />
        </div>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary text-center"
          onClick={handleSubmit} 
        >
          {loading ? "Procesando..." : "Ingresar Datos"}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;