import React, { useState } from "react";
import { useQuery } from "react-query";
import fetcher from "../../API/api";
import Spinner from "../../Components/Spinner";

const ManageOrder = () => {
    const [refectch, setReFetch] = useState(false)
  const { data, isLoading } = useQuery(["admin-order", refectch], async () => {
    const res = await fetcher.get("admin-order", {
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return res.data;
  });

  if (isLoading) return <Spinner />;

  const shippedEvent = async (id) => {
    await fetcher.put(`order/${id}`, { shipped: true }).then(data => setReFetch(!refectch))
  };

  return (
    <div>
      <div class="overflow-x-auto m-6 border rounded-lg">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Total Ordered</th>
              <th>Payable Money</th>
              <th>Ship</th>
            </tr>
          </thead>
          <tbody>
            {data.map((order, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{order.name}</td>
                <td>{order.ordered}</td>
                <td>{Number(order.ordered) * Number(order.price)}</td>
                <td>
                  {order.paid && !order.shipped && (
                    <button
                      onClick={() => shippedEvent(order._id)}
                      className="btn btn-sm btn-success"
                    >
                      Ship
                    </button>
                  )}
                  {order.shipped && (
                    <span className="text-success">Order Shipped</span>
                  )}
                  {!order.paid && <span className="text-error">Not Paid</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrder;
