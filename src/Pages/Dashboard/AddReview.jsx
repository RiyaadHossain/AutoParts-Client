import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import fetcher from "../../API/api";
import auth from "../../Authentication/Firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const addReview = async (e) => {
    e.preventDefault();
    const reviewInfo = {
      img: user.photoURL || "https://api.lorem.space/image/face?hash=92048",
      name: user.displayName || e.target.name.value,
      ratting: e.target.ratings.value || 0,
      review: e.target.review.value,
    };

    await fetcher.post("/review", reviewInfo).then((data) => console.log(data));
    toast.success('Thanks for Your Fedback')
    e.target.reset()
  };
  return (
    <div class="hero h-[60vh]">
      <div class="card flex-shrink-0 w-full max-w-5xl shadow-2xl bg-base-200">
        <h1 className="text-center text-primary mt-4 text-4xl font-bold">
          Post Your Review
        </h1>
        <form onSubmit={addReview} class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Your Name</span>
            </label>
            {user?.displayName ? (
              <input
                readOnly
                type="text"
                name="name"
                placeholder="name"
                value={user.displayName}
                class="input input-bordered"
              />
            ) : (
              <input
                type="text"
                name="name"
                placeholder="name"
                class="input input-bordered"
              />
            )}
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Ratings</span>
            </label>
            <input
              type="text"
              name="ratings"
              placeholder="ratings"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Review</span>
            </label>
            <textarea
              type="text"
              name="review"
              placeholder="review"
              class="textarea resize-none "
            />
          </div>
          <div class="form-control w-24 mx-auto mt-6">
            <button type="submit" class="btn btn-primary">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
