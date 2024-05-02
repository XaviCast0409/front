import React, { ReactNode, useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SetupForm from "../../components/ConstructorProfile/SetUpFormStripe";

interface RegisterCardConstructorProps {
  children: ReactNode;
}

const RegisterCardConstructor: React.FC<RegisterCardConstructorProps> = () => {
  const [stripePromise, setStripePromise] = useState<Promise<any> | null>(null);

  useEffect(() => {
    const fetchStripePromise = async () => {
      const stripe = await loadStripe('pk_test_51OzkqmP7so0IzTMy9YUGBYQQ6nBLOUV8O9mD6QQk9J2DmpKjXIentDzVo6p12l20a0ggzgDDpfFHtZZsjbR9Duag00yNQC7nP0');
      setStripePromise(stripe as any);
    };

    fetchStripePromise();
  }, []);

  return (
    <div className="App">
      {stripePromise && (
        <Elements stripe={stripePromise}>
          <SetupForm />
        </Elements>
      )}
    </div>
  );
};

export default RegisterCardConstructor;