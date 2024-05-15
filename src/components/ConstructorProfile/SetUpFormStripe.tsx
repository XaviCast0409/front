import { StripeCardElement } from "@stripe/stripe-js";
import { useState, useEffect } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import SideBarDashboard from "../dashboard/DashboardConstructora/SideBarDashboard";
import axios from "axios";
import { useCompanyHook } from "../../hooks/hookCompany/useCompanyHook";

interface CardDetails {
  last4: string;
  brand: string;
}

const CheckoutForm = ({ handlePayment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [, /*error */ setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [reset, setReset] = useState<boolean>(false);
  const [cardDetails, setCardDetails] = useState<CardDetails | null>(null);

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
    const response = await axios.get(`/api/payment-methods/${paymentMethodId}`);
    
  };

  const handlerGetStripeId = async (customerId) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/customer/${customerId}/card`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching card details:", error);
      throw error;
    }
  };

  useEffect(() => {
    if (comapanyId && comapanyId.customerstripeId) {
      handlerGetStripeId(comapanyId.customerstripeId)
        .then((cardDetails) => {
          setCardDetails(cardDetails);
        })
        .catch((error) => {
          console.error("Error fetching card details:", error);
        });
    }
  }, [comapanyId]);

  return (
    <div className="flex items-center h-screen">
      <SideBarDashboard />
      <div
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center h-screen bg-gray-100 w-screen"
      >
        <h3> Registered Cards </h3>
        <table className="table-auto w-1/2">
          <thead>
            <tr>
              <th className="px-4 py-2  bg-white">Brand</th>
              <th className="px-4 py-2  bg-white">Last 4 Digits</th>
              <th className="px-4 py-2 bg-white ">Delete</th>
            </tr>
          </thead>
          <tbody>
            {cardDetails ? (
              <tr>
                <td className="border px-4 py-2  bg-white">
                  {cardDetails.brand}
                </td>
                <td className="border px-4 py-2  bg-white">
                  {cardDetails.last4}
                </td>
                <td className="border px-4 py-2  bg-white">
                  <button
                    type="submit"
                    disabled={!stripe || loading}
                    className="w-full py-2 px-4 bg-primary text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 my-4"
                  >
                    {`${success ? "Card saved successfully" : "Save card"}`}
                  </button>
                </td>
              </tr>
            ) : (
              <tr>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">-</td>
              </tr>
            )}
          </tbody>
        </table>
        <h3> Register your cards </h3>
        <form className="w-full max-w-md bg-white p-6 rounded shadow-md m-4">
          {reset ? (
            <>
              <CardElement key={Math.random()} />
              {setReset(false)}
            </>
          ) : (
            <CardElement />
          )}

          {loading && (
            <div className="text-blue-600 text-center">
              Please wait while the card is being saved ...
            </div>
          )}

          <button
            type="submit"
            disabled={!stripe || loading}
            className="w-full py-2 px-4 bg-primary text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 my-4"
          >
            {`${success ? "Card saved successfully" : "Save card"}`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
