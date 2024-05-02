import React, { useState } from "react";
import { CardElement, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = ({ name, setName, amount, handlePayment }) => {
  const stripe = useStripe();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !paymentElement) {
      return;
    }

    stripe
      .createPaymentMethod({ type: "card", card: paymentElement })
      .then(async function (result) {
        if (result.error) {
          console.error(result.error);
          setError(result.error.message || null);
        } else {
          await handlePayment({
            paymentMethodId: result.paymentMethod.id,
            amount: amount,
          });
          setError(null); // Limpiar cualquier error anterior
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form  className="w-full max-w-md">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control w-full"
          />
        </div>
        <div className="mb-4">
          <CardElement className="form-control" />
        </div>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary text-center"
          onSubmit={handleSubmit}
        >
          {loading ? "Procesando..." : "Ingresar Datos"}
        </button>
      </form>
    </div>
  );
  
};

export default CheckoutForm;
