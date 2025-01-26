import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCategories from "../shared/loadDataHook/useCategories";
import Swal from "sweetalert2";
import useSellerMedicine from "./useSellerMedicine";

const AddMedicine = ({closeModal}) => {
  const { user } = useContext(AuthContext);
  const [,refetch] = useSellerMedicine()
  const sellerEmail = user?.email;
  const axiosSecure = useAxiosSecure();
  const [categories] = useCategories();
  const data = Array.isArray(categories) ? categories : [];

  const handleUploadProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const description = form.description.value;
    const category = form.category.value;
    const dosage = form.dosage.value;
    const manufacturer = form.manufacturer.value;
    const price = form.price.value;
    const productInfo = {
      name,
      image,
      description,
      category,
      dosage,
      manufacturer,
      price: `$${price}`,
      sellerEmail,
      have_discount: false,
    };
    console.log(productInfo);
    axiosSecure.post("/seller/add-product", productInfo).then((res) => {
      console.log(res);
      Swal.fire({
        title: "medicine added successfully",
        icon: "success",
        draggable: true
      });
      closeModal()
      refetch()
    });
  };
  return (
    <>
      <div>
        <h1 className="text-center font-bold text-3xl py-5">Add Medicine</h1>
        <hr />
        <div className="my-10">
          <form onSubmit={handleUploadProduct} action="">
            <div className="flex flex-col md:flex-row gap-5">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Medicine Name</span>
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Medicine Name"
                  className="input input-bordered w-full"
                  required
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Image</span>
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
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Description</span>
                </div>
                <input
                  type="text"
                  name="description"
                  placeholder="Medicine Description"
                  className="input input-bordered w-full"
                  required
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Category</span>
                </div>
                <select
                  name="category"
                  id=""
                  className="input input-bordered dropdown"
                >
                  <option value="">Select Medicine category</option>
                  {data?.map((category) => (
                    <option key={category._id} value={category.categoryName}>
                      {category.categoryName}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Item Mass Unit (ML or Mg)</span>
                </div>
                <input
                  type="text"
                  name="dosage"
                  placeholder="Item Mass Unit"
                  className="input input-bordered w-full"
                  required
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Company</span>
                </div>
                <select
                  name="manufacturer"
                  id=""
                  className="input input-bordered dropdown"
                >
                  <option value="">Select Medicine Company</option>
                  <option value="ACME pharma">Acme pharma</option>
                  <option value="square pharma">square pharma</option>
                  <option value="ABC pharma">ABC pharma</option>
                </select>
              </label>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">your email (read only)</span>
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={sellerEmail}
                  className="input input-bordered w-full text-gray-400"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Price</span>
                </div>
                <input
                  type="number"
                  name="price"
                  placeholder="price"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <input
              className="btn btn-neutral mt-5 w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddMedicine;
