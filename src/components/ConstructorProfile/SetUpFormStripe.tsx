import { StripeCardElement } from "@stripe/stripe-js";
import { useState, useEffect } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import SideBarDashboard from "../dashboard/DashboardConstructora/SideBarDashboard";

import axios from "axios";
import { useCompanyHook } from "../../hooks/hookCompany/useCompanyHook";

const inputStyle = {
  base: {
    fontSize: "16px",
    color: "#000000",
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: "antialiased",
    "::placeholder": {
      color: "#000000",
    },
  },
  invalid: {
    color: "#fa755a",
    iconColor: "#fa755a",
  },
};
const CheckoutForm = ({ handlePayment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success /* setSuccess */] = useState<boolean>(false);
  const [cardType, setCardType] = useState<string>("");
  const [name, setName] = useState<string>("");

  useEffect(() => {
    const cardNumberElement = elements?.getElement(CardNumberElement);
    cardNumberElement?.on("change", (event) => {
      const { brand } = event;
      setCardType(brand);
    });
  }, [elements]);

  const { comapanyId, findCompanyById } = useCompanyHook();

  const id = Number(localStorage.getItem("id")) || 0;

  useEffect(() => {
    findCompanyById(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("companyid", comapanyId);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    console.log("handleSubmit: entered");
    if (!stripe || !elements) {
      console.log("handleSubmit: stripe or elements is null");
      setError(`Stripe or Elements is null`);
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardNumberElement);

    console.log("handleSubmit: creating payment method");
    try {
      const { error: stripeError, paymentMethod } =
        await stripe.createPaymentMethod({
          type: "card",
          card: cardElement as unknown as StripeCardElement,
          billing_details: {
            name: "Nombre del titular de la tarjeta",
          },
        });

      console.log("handleSubmit: payment method created");
      if (stripeError) {
        console.log("handleSubmit: stripe error", stripeError);
        setError(stripeError.message || "");
        setLoading(false);
        return;
      }

      console.log("handleSubmit: calling handlePayment");
      await handlePayment({
        paymentMethodId: paymentMethod.id,
        amount: 1000,
      });

      await sendPaymentData(paymentMethod.id);
    } catch (e: any) {
      console.log("handleSubmit: error occurred during payment", e);
      setError(`Error occurred during payment: ${e.message}`);
      setLoading(false);
      throw e;
    }
  };

  const sendPaymentData = async (paymentMethodId) => {
    console.log("Sending payment data to server:", {
      customerId: comapanyId.customerstripeId,
      cardToken: paymentMethodId,
    });

    try {
      const response = await axios.post(
        "http://localhost:3000/associate-card-with-payment",
        {
          customerId: comapanyId.customerstripeId,
          cardToken: paymentMethodId,
        }
      );

      console.log("Response from server:", response.data);
      console.log("Payment data successfully sent to server");
    } catch (error) {
      console.error("Error sending payment data to server:", error);
    }
  };

  return (
    <div className="flex items-center h-screen">
      <SideBarDashboard />
      <div className="flex justify-center items-center h-screen bg-gray-100 w-screen">
        <form className="w-full max-w-md bg-white p-6 rounded shadow-md">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Nombre del titular de la tarjeta"
              className="form-input w-full p-2 border border-gray-300 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="border-b">
              <CardNumberElement options={{ style: inputStyle }} />
            </label>
            <div>{cardType}</div>
          </div>
          <div className="mb-4">
            <label className="border-b">
              <CardExpiryElement options={{ style: inputStyle }} />
            </label>
          </div>
          <div className="mb-4">
            <label className="border-b mb-2">
              <CardCvcElement options={{ style: inputStyle }} />
            </label>
          </div>
          {error && <div className="text-red-600">{error}</div>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={handleSubmit}
          >
            {`${success ? "Tarjeta añadida exitosamente" : "Guardar Tarjeta"}`}
          </button>
          {error && <div className="text-red-600">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
