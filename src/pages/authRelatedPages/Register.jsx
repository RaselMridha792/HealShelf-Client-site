import { Link } from "react-router-dom";
import PrimaryBtn from "../../Components/shared/PrimaryBtn";
import logo from "../../assets/authRelated/doctorRegister.png";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import useUploadImage from "../../hooks/useUploadImage";

const Register = () => {
  const { CreateUser, upDateUser } = useContext(AuthContext);
  const saveImgBB = useUploadImage();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit =  async(data) => {
    // sent imagedata img bb
    const image = data.file[0];
    const image_url = await saveImgBB(image)
    CreateUser(data.email, data.password)
      .then((res) => {
        // update user profile
        const name = data.name
        const image = image_url
        upDateUser(name, image)
        .then(()=>{
          console.log('user profile updated successfully')
        })
        .catch(error=>{
          console.log(error)
        })
        reset()
        const userInfo = {email: data.email, name: name, image: image, role: data.role}
        console.log(userInfo)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="hero bg-base-200 min-h-screen py-20">
        <div className="hero-content flex-col-reverse items-center justify-evenly gap-10 lg:flex-row-reverse">
          <div>
            <img className="w-2/3" src={logo} alt="" />
          </div>
          <div className="card bg-base-100 w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-3xl font-bold text-center">Register</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name*</span>
                </label>
                <input
                  type="text"
                  {...register("name")}
                  placeholder="user name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email")}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Upload Photo</span>
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  {...register("file")}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Select Your Role</span>
                </label>
                <select
                  {...register("role")}
                  required
                  className="select select-bordered w-full"
                >
                  <option>User</option>
                  <option>Seller</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password")}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <PrimaryBtn type="submit" title={"Register"}></PrimaryBtn>
              </div>
              <p className="text-center py-1">
                have an account{" "}
                <span className="text-pink-600">
                  <Link to="/login">please Login</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
