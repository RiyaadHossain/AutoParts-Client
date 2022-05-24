import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { MdCancel } from "react-icons/md";
import { useQuery } from "react-query";
import fetcher from "../../API/api";
import auth from "../../Authentication/Firebase.init";

const MyOrder = () => {
  const [user] = useAuthState(auth);

  const { data, isLoading } = useQuery("order", async () => {
    const res = await fetcher.get("order", {
      headers: {
        email: `${user?.email}`,
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return res.data;
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-6 mt-6">
      {data.length ? (
        <div class="overflow-x-auto">
          <h1 className="text-center font-bold text-primary text-4xl mb-5">
            Your Orders
          </h1>
          <table class="table w-full border-2 rounded-md">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Orders</th>
                <th>Unit Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((order, i) => (
                <tr>
                  <th>{i + 1}</th>
                  <td className="font-bold">{order.name}</td>
                  <td>{order.ordered} pc</td>
                  <td>$ {order.price}</td>
                  <td className="flex items-center ">
                    <button className="btn btn-xs btn-success mr-2">Pay</button>
                    <button className="text-2xl text-error ">
                      <MdCancel />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h1 className=" text-center text-secondary text-4xl font-bold">You Didn't Order any Product.</h1>
      )}
    </div>
  );
};

export default MyOrder;
