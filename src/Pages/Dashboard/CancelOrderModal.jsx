import React from "react";
import toast from "react-hot-toast";
import fetcher from "../../API/api";

const CancelOrderModal = ({  openModal, setOpenModal, reFetch, setReFetch }) => {
   
    const cancelOrderEvent = async() =>{
            const res = await fetcher.delete(`/order/${openModal?._id}`);
            toast.success(`Success fully Deleted ${openModal?.name} autopart`)
            setReFetch(!reFetch)
            return res.data;
    }
  return (
    <div>
      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-warning">Attention !</h3>
          <p class="py-4">
            Are You sure You want to cancel the Order of{" "}
            <span className="text-secondary">{openModal?.name}</span> parts.
          </p>
          <div class="modal-action">
            <label
            onClick={() => setOpenModal(null)}
              for="my-modal-3"
              class="btn btn-error mr-"
            >
              Cancel
            </label>
            <label onClick={cancelOrderEvent} for="my-modal" class="btn btn-success">
              Confirm
            </label>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default CancelOrderModal;
