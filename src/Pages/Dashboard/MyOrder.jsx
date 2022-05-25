import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { MdCancel } from "react-icons/md";
import { useQuery } from "react-query";
import fetcher from "../../API/api";
import auth from "../../Authentication/Firebase.init";
import CancelOrderModal from "./CancelOrderModal";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const [openModal, setOpenModal] = useState(null)
  const [reFetch, setReFetch] = useState(false)

  const { data, isLoading } = useQuery(["order", reFetch], async () => {
    const res = await fetcher.get("order", {
      headers: {
        email: `${user?.email}`,
        "Content-type": "application/json",
        "authorization": `Bearer ${localStorage.getItem("accessToken")}`,
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
                    <label onClick={()=> setOpenModal(order)} for="my-modal" class="text-2xl text-error">
                      <MdCancel />
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {openModal && <CancelOrderModal setOpenModal={setOpenModal} reFetch={reFetch} setReFetch={setReFetch} openModal={openModal}/>}
        </div>
      ) : (
        <h1 className=" text-center text-secondary text-4xl font-bold">
          You Didn't Order any Product.
        </h1>
      )}
    </div>
  );
};

export default MyOrder;
