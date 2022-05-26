import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import fetcher from "../../API/api";
import auth from "../../Authentication/Firebase.init";
import Spinner from "../../Components/Spinner";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const stripePromise = loadStripe(
    "pk_test_51L1q4EFo6wW3RMmq45vPBnTtJg0BO7D83Qc4jb7Uvl24rTISs5vuUp61FUfMapAqK0NwQD3ELA4sb5y7OacpetZN00ajNdIyM2"
  );
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const { data, isLoading } = useQuery("order", async () => {
    const res = await fetcher.get(`order/${id}`, {
      headers: {
        email: `${user?.email}`,
        "Content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return res.data;
  });

  if (isLoading) return <Spinner />;

  return (
    <div class="h-[72vh] flex items-center justify-center py-6">
      <div>
        <div class="card w-full mx-auto max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="card-body">
              <h1 className="text-center text-3xl font-bold">
                Your Order <span className="text-primary">{data.name}</span>
              </h1>
              <p>
                You have ordered {data.ordered} pc {data.name} . Pay total{" "}
                <span className="text-secondary">
                  ${Number(data.price) * Number(data.ordered)}
                </span>{" "}
                for {data.ordered} pc {data.name}
              </p>
            </div>
          </div>
        </div>
        <div class=" p-5 w-[500px] mx-auto rounded-md bg-base-100 shadow-2xl mt-8">
          <div class="">
            <Elements stripe={stripePromise}>
              <CheckoutForm data={data} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
