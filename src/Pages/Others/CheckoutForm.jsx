import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import fetcher from "../../API/api";
import toast from "react-hot-toast";

const CheckoutForm = ({ data }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");

  const { price, name, email, _id } = data;

  useEffect(() => {
    (async () =>
      await fetcher
        .post(
          "/create-payment-intent",
          { price },
          {
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        )
        .then((data) => {
          console.log(data);
          if (data.data.clientSecret) {
            setClientSecret(data.data.clientSecret);
          }
        }))();
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");

    // Confirm Order
    const { paymentIntent, error: intendError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });
    if (intendError) {
      setCardError(intendError?.message);
    } else {
      (async () => {
        await fetcher.put(
          `/order/${_id}`,
          { paid: true, transactionId: paymentIntent.id },
          {
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
      })();
      setCardError("");
      console.log(paymentIntent.id);
      setTransactionId(paymentIntent.id);
      setSuccess("Congrates! Your payment is successful.");
      toast.success("Your Order is completed successfullly", { id: "pay1" });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <button
          className="btn btn-success btn-sm mt-5"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500 mt-3">{cardError}</p>}
      {success && <p className="text-green-500 mt-3">{success}</p>}
    </>
  );
};

export default CheckoutForm;
