import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import fetcher from "../../API/api";
import auth from "../../Authentication/Firebase.init";

const ProfileUpdateModal = ({setOpenModal}) => {
  const [user] = useAuthState(auth);
  const updateUser = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const education = e.target.education.value;
    const linkedin = e.target.linkedin.value;
    console.log(name);
    if (!name || !phone || !address || !education || !linkedin) {
      toast.error("Please Provide all the Infomation", { id: "Key" });
      return;
    }
    const userInfo = {
      name,
      phone,
      address,
      education,
      linkedin,
    };
    await fetcher.put(`/user?email=${user.email}`, userInfo).then((data) => {
      setOpenModal(null)
      window.location.reload()
      toast.success("User Updated Successfully");
    });
  };
  return (
    <>
      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal">
        <form onSubmit={updateUser} class="modal-box">
          <label
            for="my-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold mb-3 text-2xl">Update Your Information</h3>

          {/* Name Field */}
          <div class="form-control w-full mb-1">
            <label class="label">
              <span class="label-text">Your name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              class="input input-bordered w-full mb-1"
            />
          </div>

          {/* Email Field */}
          <div class="form-control w-full mb-1">
            <label class="label">
              <span class="label-text">Your Email</span>
            </label>
            <input
              readOnly
              value={user?.email}
              type="text"
              placeholder="Name"
              class="input input-bordered w-full mb-1 bg-gray-200"
            />
          </div>

          {/* Phone Field */}
          <div class="form-control w-full mb-1">
            <label class="label">
              <span class="label-text">Your Phone</span>
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              class="input input-bordered w-full mb-1"
            />
          </div>

          {/* Address Field */}
          <div class="form-control w-full mb-1">
            <label class="label">
              <span class="label-text">Your Address</span>
            </label>
            <input
              type="text"
              name="address"
              placeholder="Address"
              class="input input-bordered w-full mb-1"
            />
          </div>

          {/* Education Field */}
          <div class="form-control w-full mb-1">
            <label class="label">
              <span class="label-text">Your Education</span>
            </label>
            <input
              type="text"
              name="education"
              placeholder="Education"
              class="input input-bordered w-full mb-1"
            />
          </div>

          {/* LinkedIn Field */}
          <div class="form-control w-full mb-1">
            <label class="label">
              <span class="label-text">Your LinkedIn Account</span>
            </label>
            <input
              type="text"
              name="linkedin"
              placeholder="LinkedIn Id"
              class="input input-bordered w-full mb-1"
            />
          </div>

          <div class="modal-action">
            <button type="submit" class="btn">
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfileUpdateModal;
