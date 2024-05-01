/* import { useState } from "react";
import axios from "axios";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51OzkqmP7so0IzTMy9YUGBYQQ6nBLOUV8O9mD6QQk9J2DmpKjXIentDzVo6p12l20a0ggzgDDpfFHtZZsjbR9Duag00yNQC7nP0'); */

const RegisterCardConstructor = () => {
/*   const [cardDetails, setCardDetails] = useState({
    customerId: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  });

  const handleChange = (e) => {
    setCardDetails({
      ...cardDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const stripe = await stripePromise;
      const { token } = await stripe.createToken({
        card: {
          number: cardDetails.cardNumber,
          exp_month: cardDetails.expMonth,
          exp_year: cardDetails.expYear,
          cvc: cardDetails.cvc,
        },
      });

      if (token) {
        const response = await axios.post(
          "http://localhost:3000/associate-card-with-payment",
          {
            ...cardDetails,
            token: token.id,
          }
        );
        console.log(response.data); 
      } else {
        console.error("Error creating token");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }; */
  return (
    <div>
      <h1>Register Card</h1>
    </div>
/*     <form  className="mt-70" onSubmit={handleSubmit}>
      <input
        type="text"
        name="expMonth"
        placeholder="Expiration Month"
        value={cardDetails.expMonth}
        onChange={handleChange}
        className="border p-2 rounded mb-2 w-full"
      />
      <input
        type="text"
        name="expYear"
        placeholder="Expiration Year"
        value={cardDetails.expYear}
        onChange={handleChange}
        className="border p-2 rounded mb-2 w-full"
      />
      <input
        type="text"
        name="cvc"
        placeholder="CVC"
        value={cardDetails.cvc}
        onChange={handleChange}
        className="border p-2 rounded mb-2 w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded mt-2 w-full"
      >
        Submit
      </button>
    </form> */ 
  );
};

export default RegisterCardConstructor;
