import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import fetcher from "../../API/api";

const Purchase = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery("part", async () => {
    const res = await fetcher.get(`/part/${id}`);
    return res.data;
  });
  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="mt-14 mx-auto max-w-[700px]">
      <div class="card  max-w-96 mx-auto bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-[430px] w-full object-cover"
            src={data.img}
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <div className="flex justify-between">
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
            <div>
              <label class="label">
                <span class="label-text text-info">Parts Quantity</span>
              </label>
              <input
                type="text"
                placeholder="Quantity"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <p className="text-base">{data.description}</p>
          <form action="">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text text-info"> Phone Number</span>
              </label>
              <input
                type="text"
                placeholder="Your Phone Number"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text text-info"> Address</span>
              </label>
              <input
                type="text"
                placeholder="Your Address"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
