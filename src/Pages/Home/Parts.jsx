import React, { useEffect, useState } from "react";

const Parts = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch("parts.json")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);
  return (
    <div className="pt-32">
      <h1 className="text-5xl text-center text-secondary font-bold mb-8">Auto Parts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
        {parts.map((part, i) => (
          <div class="card max-w-96 mx-auto bg-base-100 shadow-xl" key={i}>
            <figure>
              <img className="h-[430px] w-full object-cover" src={part.img} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="text-2xl font-bold">{part.name}</h2>
              <p><span className="text-md font-bold">Price:</span> ${part.price}<small> per Unit</small></p>
              <p><span className="text-md font-bold">Available:</span> {part.quantity}</p>
              <p><span className="text-md font-bold">Minimum Order:</span> {part.min_order}</p>
              <p className="text-base">{part.description}</p>
              <div class="card-actions justify-start">
                <button class="btn btn-primary">Purchase</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parts;
