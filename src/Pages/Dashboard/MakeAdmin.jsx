import { async } from "@firebase/util";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import fetcher from "../../API/api";

const MakeAdmin = () => {
    const [refetch, setRefetch] = useState(false)
  const { data, isLoading } = useQuery(["make-user", refetch], async () => {
    const res = await fetcher.get("/make-user", {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return res.data;
  });
  if (isLoading) return <p>Loading...</p>;

  const makeAdmin = async (email) => {
    await fetcher.put(`/user?email=${email}`,{role: 'admin'}, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then(res => {
        if(res.status === 200){
            toast.success("User Role is Admin Now", {id:'admin'})
            setRefetch(!refetch)
        }
    }).catch(err =>{
        if(err.message){
            toast.error("Unauthorized Access", {id: '1'})
        }
    });
  };
  return (
    <div>
      <div class="overflow-x-auto m-8 border rounded-xl">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Role</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, i) => (
              <tr>
                <th>{i + 1}</th>
                <td className="font-bold">{user.name}</td>
                <td>
                  {user.role === "admin" ? (
                    <p className="text-success">Already Admin</p>
                  ) : (
                    "User"
                  )}
                </td>
                <td>
                  <button
                    onClick={() => makeAdmin(user.email)}
                    className="btn btn-success btn-sm"
                  >
                    Make Admin
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
