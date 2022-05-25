import React from "react";
import toast from "react-hot-toast";
import fetcher from "../../API/api";

const AddItem = () => {
  const addItemEvent = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = Number(e.target.price.value);
    const min_order = Number(e.target.min_order.value);
    const quantity = Number(e.target.quantity.value);
    const description = e.target.description.value;
    const img = e.target.url.value;
    const itemInfo = {
      name,
      price,
      min_order,
      quantity,
      description,
      img,
    };
    if (!name || !price || !min_order || !quantity || !description || !img) {
      toast.error("Please Input All the Item Information", { id: "5" });
    } else {
      await fetcher
        .post("/part", itemInfo, {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => {
          e.target.reset()
          toast.success(`${name} Item Added Successfully`);
        })
        .catch((err) => {
          toast.error("Invalid Token", { id: "6" });
        });
    }
  };
  return (
    <div class="hero min-h-[70vh]">
      <div class="card bg-base-100 flex-shrink-0 w-full max-w-sm shadow-2xl">
        <form onSubmit={addItemEvent} class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Product Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Unit Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Minimum Order Quantity</span>
            </label>
            <input
              type="text"
              name="min_order"
              placeholder="Minimum Order Quantity"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Available Quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              placeholder="Available Quantity"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Item Description</span>
            </label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Image URL</span>
            </label>
            <input
              type="text"
              name="url"
              placeholder="URL"
              class="input input-bordered"
            />
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">Add Item</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
