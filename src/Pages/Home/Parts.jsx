import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import fetcher from "../../API/api";
import Spinner from "../../Components/Spinner";

const Parts = () => {
  const { data, isLoading } = useQuery("parts", async () => {
    const res = await fetcher.get("/parts");
    return res.data;
  });

  if (isLoading) return <Spinner/>;

  return (
    <div className="pt-32">
      <h1 className="text-5xl text-center text-secondary font-bold mb-8">
        Auto Parts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
        {data.map(
          ({ name, img, _id, description, quantity, min_order, price }, i) => (
            <div class="card max-w-96 mx-auto bg-base-100 shadow-xl" key={i}>
              <figure>
                <img
                  className="h-[430px] w-full object-cover"
                  src={img}
                  alt="Shoes"
                />
              </figure>
              <div class="card-body">
                <h2 class="text-2xl font-bold">{name}</h2>
                <p>
                  <span className="text-md font-bold">Price:</span> ${price}
                  <small> per Unit</small>
                </p>
                <p>
                  <span className="text-md font-bold">Available:</span>{" "}
                  {quantity}
                </p>
                <p>
                  <span className="text-md font-bold">Minimum Order:</span>{" "}
                  {min_order}
                </p>
                <p className="text-base">{description}</p>
                <div class="card-actions justify-start">
                  <Link to={`/purchase/${_id}`} class="btn btn-primary">
                    Purchase
                  </Link>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Parts;
