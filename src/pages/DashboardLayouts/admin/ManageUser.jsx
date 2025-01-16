import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUser = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleChangeRole = (id, selectedRole) => {
    Swal.fire({
      title: "Are you sure?",
      text: `do you want to set the role to ${selectedRole}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, set ${selectedRole}`,
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/user/role/${id}`, { selectedRole }).then((res) => {
          result = res.data.acknowledged;
          if (result) {
            Swal.fire({
              title: "Role setup!",
              text: `Role Setup Successfull to ${selectedRole}`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleDeleteUser = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete this!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "user has been deleted.",
              icon: "success"
            });
          }
        });
      }
    });
  };
  return (
    <>
      <h1 className="text-3xl capitalize text-center pt-10 pb-5">
        manage users
      </h1>
      <div className="">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-cyan-400">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={user.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>
                    <select
                      onChange={(event) =>
                        handleChangeRole(user._id, event.target.value)
                      }
                      name=""
                      id=""
                    >
                      <option>{user.role}</option>
                      {user.role !== "customer" && (
                        <option name="customer" value="customer">
                          Customer
                        </option>
                      )}
                      {user.role !== "Seller" && (
                        <option name="seller" value="Seller">
                          Seller
                        </option>
                      )}
                      {user.role !== "admin" && (
                        <option name="admin" value="admin">
                          Admin
                        </option>
                      )}
                    </select>
                  </td>
                  <th>
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="btn btn-ghost text-xl bg-red-500 text-white"
                    >
                      <FaRegTrashAlt />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageUser;
