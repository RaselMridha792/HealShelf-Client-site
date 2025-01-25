import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UpdateCategory = ({ singleCategory, refetch, closeModal }) => {
  const axiosSecure = useAxiosSecure();
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const id = singleCategory?._id;
    const category = form.category.value;
    const categoryName = form.categoryTag.value;
    const image = form.image.value;
    const updatedInfo = { category, categoryName, image, id };

    axiosSecure
      .patch(`/admin/update-category/${id}`, updatedInfo)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Successfully Updated!",
            icon: "success",
            draggable: true,
          });
          closeModal()
          refetch()
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="w-full">
        <h1 className="text-xl font-bold capitalize text-center py-5">
          Update Category
        </h1>
        <form onSubmit={handleUpdate}>
          <div className="flex flex-col md:flex-row gap-5">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">category Name</span>
              </div>
              <input
                type="text"
                name="category"
                defaultValue={singleCategory?.categoryName}
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
                defaultValue={singleCategory?.category}
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
                defaultValue={singleCategory?.image}
                placeholder="Image Url"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <label className="form-control w-full pt-5">
              <input type="submit" className="btn btn-neutral" value="Update" />
            </label>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateCategory;
