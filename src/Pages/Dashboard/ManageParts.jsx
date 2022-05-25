import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import { useQuery } from "react-query";
import fetcher from "../../API/api";
import Spinner from "../../Components/Spinner";
import DeleteItemModal from "./DeleteItemModal";

const ManageParts = () => {
  const [refetch, setRefetch] = useState(null);
  const [openModal, setOpenModal] = useState(false);
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
                <label
                  for="delete-user-modal"
                  onClick={() => setOpenModal(item)}
                  class="btn btn-error btn-sm"
                >
                  <MdCancel className="text-2xl text-white" />
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {openModal && <DeleteItemModal refetch={refetch} setOpenModal={setOpenModal} openModal={openModal} setRefetch={setRefetch} />}
    </div>
  );
};

export default ManageParts;
