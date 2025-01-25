import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { useForm } from "react-hook-form";
import useUploadImage from "../../../hooks/useUploadImage";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Advertise = ({ refetch, closeModal }) => {
  const { user } = useContext(AuthContext);
  const saveImgBB = useUploadImage();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const image = data.file[0];
    const image_url = await saveImgBB(image);
    const adsInfo = {
      image: image_url,
      heading: data.heading,
      subheading: data.subheading,
      sellerEmail: user?.email,
      medicineDescription: data.description,
      status: "pending",
    };

    axiosSecure.post("/seller/ads-request", adsInfo).then((res) => {
      console.log(res);
      if (res.data.acknowledged) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "request sent ask for the Advertisement",
          showConfirmButton: false,
          timer: 1500
        });
        reset();
        refetch();
        closeModal();
      }
    });

    console.log("add information is: ", adsInfo);
  };
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-5">
        <h1 className="text-center font-bold text-2xl">Add Advertise</h1>
        <hr className="my-5" />
        <form onSubmit={handleSubmit(onSubmit)} action="">
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
                <span className="label-text">Product Image</span>
              </div>
              <input
                type="file"
                name="file"
                {...register("file")}
                placeholder="Image Url"
                required
              />
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
                {...register("email")}
                placeholder="email"
                value={user?.email}
                className="input input-bordered w-full text-gray-400"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">description</span>
              </div>
              <input
                type="text"
                name="description"
                {...register("description")}
                placeholder="description"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Ads Heading</span>
              </div>
              <input
                type="heading"
                name="heading"
                {...register("heading")}
                placeholder="heading"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Sub Heading</span>
              </div>
              <input
                type="text"
                name="subheading"
                {...register("subheading")}
                placeholder="sub heading"
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
    </>
  );
};

export default Advertise;
