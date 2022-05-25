import React, { useState } from "react";
import toast from "react-hot-toast";
import { MdCancel } from "react-icons/md";
import { useQuery } from "react-query";
import fetcher from "../../API/api";
import Spinner from "../../Components/Spinner";

const ManageParts = () => {
  const [refetch, setRefetch] = useState(false);
  const { data, isLoading } = useQuery(["parts", refetch], async () => {
    const res = await fetcher
      .get("/parts", {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .catch((err) => console.log(err));
    return res.data;
  });
  if (isLoading) return <Spinner />;
  const removeItem = async (id) => {
    await fetcher
      .delete(`/part/${id}`, {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        toast.success("Item has been Deleted", { id: "7" });
        setRefetch(!refetch);
      })
      .catch((err) => {
        toast.error("Your Token is invalid", { id: "8" });
      });
  };
  return (
    <div class="overflow-x-auto m-8 border rounded-xl">
      <table class="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Available</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr>
              <th className="font-bold">{i + 1}</th>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>
                <button onClick={() => removeItem(item._id)}>
                  <MdCancel className="text-2xl text-error" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageParts;
