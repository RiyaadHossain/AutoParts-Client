import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import fetcher from "../../API/api";
import auth from "../../Authentication/Firebase.init";
import Spinner from "../../Components/Spinner";
import ProfileUpdateModal from "./ProfileUpdateModal";

const MyProfile = () => {
  const [openModal, setOpenModal] = useState(null)
  const [user] = useAuthState(auth);
  const { data, isLoading } = useQuery("user", async () => {
    const res = await fetcher.get(`/user?email=${user.email}`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    setOpenModal('Open Modal')
    return res.data;
  });
  if (isLoading) return <Spinner/>;
  return (
    <div>
      <div className="card max-w-3xl mx-auto mt-28 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-3xl font-bold mb-2">{data.name || "Not Provided"}</h2>
          <p className="mb-1 text-xl">
            <span className="font-bold">Email:</span> {data.email}
          </p>
          <p className="mb-1 text-xl">
            <span className="font-bold">Phone:</span> {data?.phone || "Not Provied"}
          </p>
          <p className="mb-1 text-xl">
            <span className="font-bold">Address:</span>{" "}
            {data?.address || "Not Provided"}
          </p>
          <p className="mb-1 text-xl">
            <span className="font-bold">Education: </span>{" "}
            {data?.education || "Not Provided"}
          </p>
          <p className="mb-1 text-xl">
            <span className="font-bold">LinkedIn Id: </span>{" "}
            {data?.linkedin || "Not Provided"}
          </p>
          <div class="card-actions">
            <label for="my-modal" class="btn btn-primary">
              Update Profile
            </label>
            {openModal && <ProfileUpdateModal setOpenModal={setOpenModal}/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
