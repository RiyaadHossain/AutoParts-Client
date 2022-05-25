import React from "react";
import toast from "react-hot-toast";
import fetcher from "../../API/api";

const DeleteItemModal = ({ setRefetch, refetch, openModal, setOpenModal }) => {
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
        setOpenModal(null)
      })
      .catch((err) => {
        toast.error("Your Token is invalid", { id: "8" });
      });
  };
  return (
    <div>
      <input type="checkbox" id="delete-user-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-warning">
            Are You Sure want to delete this Item
          </h3>
          <p class="py-4">
            After Deleting this item it'll be totally unavailable from your
            applicatoin.
          </p>
          <div class="modal-action">
            <label for="delete-user-modal" class="btn btn-success">
              Cancel
            </label>
            <button
              className="btn btn-error"
              onClick={() => removeItem(openModal._id)}
            >
              Procced
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteItemModal;
