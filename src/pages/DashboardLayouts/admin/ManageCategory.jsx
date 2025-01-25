import { FaTrash } from "react-icons/fa6";
import { MdUpdate } from "react-icons/md";
import useCategories from "../shared/loadDataHook/useCategories";
import Loader from "../shared/Loader";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import UpdateCategory from "./UpdateCategory";
import { useState } from "react";

const ManageCategory = () => {
  const [categories, isLoading, refetch] = useCategories();
  const axiosSecure = useAxiosSecure();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleAddCategory = async (e) => {
    e.preventDefault();
    const form = e.target;
    const categoryName = form.category.value;
    const image = form.image.value;
    const category = form.categoryTag.value;
    const categoryInfo = { category, image, categoryName, medicineCount: 0 };
    axiosSecure
      .post("/admin/add-category", categoryInfo)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Successfully Added!",
            icon: "success",
            draggable: true,
          });
          document.getElementById("my_modal_4").close();
          refetch();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const closeModal = () => {
    setSelectedCategory(null);
    document.getElementById("my_modal_5").close();
  };

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/admin/delete-category/${id}`)
          .then((res) => {
            console.log(res);
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "category has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };
  return (
    <>
      <section className="my-10 px-5">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-3xl font-bold uppercase">Manage Category</h1>
          <button
            className="btn btn-neutral"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            Add Category
          </button>
        </div>
        <div>
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box lg:w-8/12">
              <div className="w-full">
                <h1 className="text-xl font-bold capitalize text-center py-5">
                  Add Category
                </h1>
                <form onSubmit={handleAddCategory}>
                  <div className="flex flex-col md:flex-row gap-5">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">category Name</span>
                      </div>
                      <input
                        type="text"
                        name="category"
                        placeholder="Medicine Name"
                        className="input input-bordered w-full"
                        required
                      />
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Category Tag</span>
                      </div>
                      <input
                        type="text"
                        name="categoryTag"
                        placeholder="write without space"
                        className="input input-bordered w-full"
                        required
                      />
                    </label>
                  </div>
                  <div className="flex flex-col md:flex-row gap-5">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Category Image</span>
                      </div>
                      <input
                        type="url"
                        name="image"
                        placeholder="Image Url"
                        className="input input-bordered w-full"
                        required
                      />
                    </label>
                  </div>
                  <div className="flex flex-col md:flex-row gap-5">
                    <label className="form-control w-full pt-5">
                      <input
                        type="submit"
                        className="btn btn-neutral"
                        value="Add"
                      />
                    </label>
                  </div>
                </form>
              </div>

              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        <div className="overflow-x-auto mt-10">
          <table className="table">
            {/* head */}
            <thead className="bg-cyan-500 text-white text-xl">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Category Name</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {isLoading ? (
                <Loader></Loader>
              ) : (
                categories?.map((category, index) => (
                  <tr key={category._id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={category.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{category.categoryName}</td>
                    <td>
                      <dialog id="my_modal_5" className="modal">
                        <div className="modal-box lg:w-8/12">
                          <UpdateCategory
                            singleCategory={selectedCategory}
                            refetch={refetch}
                            closeModal={closeModal}
                          ></UpdateCategory>
                          <div className="modal-action">
                            <form method="dialog">
                              <button className="btn">Close</button>
                            </form>
                          </div>
                        </div>
                      </dialog>
                      <button
                        onClick={() => {
                          setSelectedCategory(category);
                          document.getElementById("my_modal_5").showModal();
                        }}
                        className="btn  font-bold flex gap-1 btn-warning"
                      >
                        <MdUpdate className="text-xl" /> Update
                      </button>
                    </td>
                    <th>
                      <button
                        onClick={() => handleDelete(category._id)}
                        className="btn  flex gap-1 font-bold btn-error"
                      >
                        <FaTrash className="text-xl" /> Delete
                      </button>
                    </th>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default ManageCategory;
