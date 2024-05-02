import { useState } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";


const inputStyle = {
    base: {
      fontSize: '16px', 
      color: '#000000',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      '::placeholder': {
        color: '#000000',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  };

const CheckoutForm = ({ name, setName, amount, handlePayment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    console.log("handleSubmit: entered")
    if (!stripe || !elements) {
      console.log("handleSubmit: stripe or elements is null")
      setError(`Stripe or Elements is null`);
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardNumberElement);

    console.log("handleSubmit: creating payment method")
    try {
      const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: 'Nombre del titular de la tarjeta',
        },
      });

      console.log("handleSubmit: payment method created")
      if (stripeError) {
        console.log("handleSubmit: stripe error", stripeError)
        setError(stripeError.message || null);
        setLoading(false);
        return;
      }

      console.log("handleSubmit: calling handlePayment")
      await handlePayment({
        paymentMethodId: paymentMethod.id,
        amount: amount,
      });

      console.log("handleSubmit: calling sendPaymentData")
      await sendPaymentData(paymentMethod.id);
    } catch (e) {
      console.log("handleSubmit: error occurred during payment", e)
      setError(`Error occurred during payment: ${e.message}`);
      setLoading(false);
      throw e;
    }
  };

  const sendPaymentData = async (paymentMethodId) => {
    console.log("Sending payment data to server:", {
      customerId: "ID_DEL_CLIENTE",
      cardToken: paymentMethodId,
    });

    try {
      const response = await axios.post("http://localhost:3000/associate-card-with-payment", {
        customerId: "ID_DEL_CLIENTE",
        cardToken: paymentMethodId,
      });

      console.log("Response from server:", response.data);
      console.log("Payment data successfully sent to server");
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
          <CardNumberElement options={{ style: inputStyle }} />
        </div>
        <div className="mb-4">
          <CardExpiryElement options={{ style: inputStyle }} />
        </div>
        <div className="mb-4">
          <CardCvcElement options={{ style: inputStyle }} />
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