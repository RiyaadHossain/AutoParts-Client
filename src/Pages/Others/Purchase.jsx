import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import fetcher from "../../API/api";
import auth from "../../Authentication/Firebase.init";
import toast from "react-hot-toast";
import Spinner from "../../Components/Spinner";

const Purchase = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const { id } = useParams();
  const [user, loading] = useAuthState(auth);
  const { data, isLoading } = useQuery("part", async () => {
    const res = await fetcher.get(`/part/${id}`);
    return res.data;
  });

  if (isLoading || loading) return <Spinner/>;

  const correctQuantity = (e) => {
    const quantity = Number(e.target.value);
    if (quantity >= data.min_order && quantity <= data.quantity) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  let errorMsg;
  if (buttonDisabled) {
    errorMsg = (
      <p className="text-error">
        You have to buy at least {data.min_order} pic parts and maximum
        {data.quantity} pic parts.
      </p>
    );
  } else {
    errorMsg = <p></p>;
  }

  // Purchase Button
  const purchaseButton = async (e) => {
    e.preventDefault();
    const actualQuantity = Number(e.target.quantity.value);
    if (actualQuantity < data.min_order || actualQuantity > data.quantity) {
      console.log("No no");
      return;
    }
    const ordered = Number(e.target.quantity.value);
    const updatedQuantity = data.quantity - ordered;
    const partsData = {
      name: data.name,
      email: user.email,
      img: data.img,
      price: data.price,
      min_order: data.min_order,
      description: data.description,
      ordered,
    };
    await fetcher
      .post("/order", partsData, {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .catch((err) => {
        if (err.message) {
          toast.error("Your JWT Token is invalid", { id: "key" });
        }
      });

    await fetcher
      .put(`/part/${data._id}`, {
        quantity: updatedQuantity,
      })
      .then((res) => {
        if(res.data.modifiedCount){

          e.target.reset();
          toast.success("Your Order Successfully added.");
        }
      })
      .catch((err) => {
        if (err.message) {
          toast.error("Your JWT Token is invalid", { id: "key" });
        }
      });
  };
  return (
    <div className="mt-14 mb-12 mx-auto max-w-[700px]">
      <div class="card  max-w-96 mx-auto bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-[430px] w-full object-cover"
            src={data.img}
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <div>
            <h2 class="text-2xl font-bold">{data.name}</h2>
            <p>
              <span className="text-md font-bold">Price:</span> ${data.price}
              <small> per Unit</small>
            </p>
            <p>
              <span className="text-md font-bold">Available:</span>{" "}
              {data.quantity}
            </p>
            <p>
              <span className="text-md font-bold">Minimum Order:</span>{" "}
              {data.min_order}
            </p>
          </div>
          <p className="text-base">{data.description}</p>
          <form onSubmit={purchaseButton} action="">
            <div class="form-control mt-2 w-full">
              <label class="label">
                <span class="label-text text-info">User Name</span>
              </label>
              <input
                readOnly
                type="text"
                placeholder="Quantity"
                class="input input-bordered w-full "
                value={`${
                  user?.displayName ? user.displayName : "Unknown Customer"
                }`}
              />
            </div>
            <div class="form-control mt-2 w-full ">
              <label class="label">
                <span class="label-text text-info">User Email</span>
              </label>
              <input
                readOnly
                type="text"
                placeholder="Quantity"
                class="input input-bordered w-full"
                value={`${user && user.email}`}
              />
            </div>
            <div class="form-control mt-2 w-full ">
              <label class="label">
                <span class="label-text text-info">Parts Quantity</span>
              </label>
              <input
                type="text"
                defaultValue={data.min_order}
                placeholder="Quantity"
                name="quantity"
                onChange={correctQuantity}
                class="input input-bordered w-full "
              />
            </div>
            <div class="form-control mt-2 w-full ">
              <label class="label">
                <span class="label-text text-info"> Phone Number</span>
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Your Phone Number"
                class="input input-bordered w-full "
              />
            </div>
            <div class="form-control mt-2 w-full ">
              <label class="label">
                <span class="label-text text-info"> Address</span>
              </label>
              <input
                type="text"
                placeholder="Your Address"
                class="input input-bordered w-full "
              />
            </div>
            {errorMsg && errorMsg}
            <input
              disabled={buttonDisabled}
              className="btn mt-5 btn-info"
              type="submit"
              value="Place Order"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
