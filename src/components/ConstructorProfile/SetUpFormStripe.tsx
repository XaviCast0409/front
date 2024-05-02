import React, { useState } from "react";
import { CardElement, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

interface CheckoutFormProps {
  paymentElement: any;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ paymentElement }) => {
  const stripe = useStripe();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !paymentElement) {
      return;
    }

    setLoading(true);

    stripe
      .createPaymentMethod({
        type: "card",
        card: paymentElement,
        billing_details: {
          name: name,
        },
      })
      .then(async function (result) {
        if (result.error) {
          console.error(result.error);
          setError(result.error.message || null);
          setLoading(false);
        } else {
          try {
            const response = await axios.post("/checkout", {
              id: result.paymentMethod!.id,
              amount: amount,
            });
            console.log("Respuesta del backend:", response.data);
            setError(null);
          } catch (error) {
            console.error("Error al enviar el token al backend:", error);
            setError("Error al procesar el pago");
          } finally {
            setLoading(false);
          }
        }
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form onSubmit={handleSubmit} style={{ width: "300px" }}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            marginBottom: "10px",
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <div style={{ marginBottom: "20px" }}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#495057",
                  fontFamily: "inherit",
                  "::placeholder": {
                    color: "#6c757d",
                  },
                },
              },
            }}
          />
        </div>
        {error && (
          <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
        )}
        <button
          type="submit"
          disabled={!stripe || loading}
          style={{
            width: "100%",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#0056b3")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#007bff")
          }
        >
          {loading ? "Procesando..." : "Ingresar Datos"}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
