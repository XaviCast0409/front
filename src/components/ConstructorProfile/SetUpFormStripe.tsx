import { StripeCardElement } from "@stripe/stripe-js";
import { useState, useEffect } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import SideBarDashboard from "../dashboard/DashboardConstructora/SideBarDashboard";

import axios from "axios";
import { useCompanyHook } from "../../hooks/hookCompany/useCompanyHook";

const CheckoutForm = ({ handlePayment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [, /*error */ setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [reset, setReset] = useState<boolean>(false);

  const { comapanyId, findCompanyById } = useCompanyHook();

  const id = Number(localStorage.getItem("id")) || 0;

  useEffect(() => {
    findCompanyById(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setError(`Stripe or Elements is null`);
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error: stripeError, paymentMethod } =
      await stripe.createPaymentMethod({
        type: "card",
        card: cardElement as StripeCardElement,
      });

    if (stripeError) {
      setError(stripeError.message || "");
      setLoading(false);
      return;
    }

    await handlePayment({
      paymentMethodId: paymentMethod.id,
      amount: 1000,
    });

    await sendPaymentData(paymentMethod.id);
    setSuccess(true);
    setLoading(false);

    setReset(true);
  };

  const sendPaymentData = async (paymentMethodId) => {
    console.log("sendPaymentData: started");
    if (!comapanyId || !comapanyId.customerstripeId) {
      console.log("sendPaymentData: customerstripeId is null or undefined");
      setError("customerstripeId is null or undefined");
      return;
    }
    try {
      console.log("Sending payment data to server:", {
        customerId: comapanyId.customerstripeId,
        paymentMethodId: paymentMethodId,
      });

      console.log("sendPaymentData: calling axios.post");
      const [associateResponse] = await Promise.all([
        axios.post("http://localhost:3000/associate-card-with-payment", {
          customerId: comapanyId.customerstripeId,
          paymentMethodId: paymentMethodId,
        }),
      ]);

      console.log("sendPaymentData: responses received from server");
      if (!associateResponse) {
        console.log("sendPaymentData: error sending payment data to server");
        setError("Error sending payment data to server");
        return;
      }

      console.log(
        "sendPaymentData: Response from associate-card-with-payment:",
        associateResponse.data
      );

      console.log("sendPaymentData: Payment data successfully sent to server");
    } catch (error) {
      console.error(
        "sendPaymentData: Error sending payment data to server:",
        error
      );
      setError("Error sending payment data to server");
    }
  };

  return (
    <div className="flex items-center h-screen">
      <SideBarDashboard />
      <div
        onSubmit={handleSubmit}
        className="flex justify-center items-center h-screen bg-gray-100 w-screen"
      >
        <form className="w-full max-w-md bg-white p-6 rounded shadow-md m-4">
          {reset ? (
            <>
              <CardElement key={Math.random()} />
              {setReset(false)}
            </>
          ) : (
            <CardElement />
          )}

          <button
            type="submit"
            disabled={!stripe || loading}
            className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 my-4"
          >
            {`${success ? "Tarjeta añadida exitosamente" : "Guardar Tarjeta"}`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
