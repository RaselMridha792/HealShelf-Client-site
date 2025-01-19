import { Link, useNavigate } from "react-router-dom";
import PrimaryBtn from "../../Components/shared/PrimaryBtn";
import logo from "../../assets/authRelated/doctorRegister.png";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import useUploadImage from "../../hooks/useUploadImage";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const { CreateUser, upDateUser, signInGoogle } = useContext(AuthContext);
  const saveImgBB = useUploadImage();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    // sent imagedata img bb
    const image = data.file[0];
    const image_url = await saveImgBB(image);
    CreateUser(data.email, data.password)
      .then(() => {
        // update user profile
        const name = data.name;
        const image = image_url;
        upDateUser(name, image)
          .then(() => {
            const userInfo = {
              email: data.email.toLowerCase(),
              name: name,
              image: image,
              role: data.role,
            };
            // send user information to the database
            axiosPublic.post("/users", userInfo).then((res) => {
              const response = res.data.acknowledged;
              if (response) {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Profile Created Successful",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
          })
          .catch((error) => {
            console.log(error);
          });
        reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleLogin = () => {
    signInGoogle()
      .then((result) => {
        console.log(result.user.displayName);
        const name = result.user.displayName;
        const email = result.user.email;
        const image = result.user.photoURL;
        const role = "customer";
        const userInfo = { name, email, image, role };
        // send user information to the database
        axiosPublic.post("/users", userInfo).then((res) => {
          const response = res.data.acknowledged;
          if (response) {
            console.log(response)
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Profile Created Successful",
              showConfirmButton: false,
              timer: 1500,
            });
          }else{
            console.log(res)
          }
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="items-center justify-center flex lg:mt-40 mt-20">
        <div className="flex lg:w-8/12 md:w-10/12 mx-auto flex-col-reverse justify-between items-center lg:flex-row-reverse">
          <div className="w-full flex items-center justify-center">
            <img className="md:w-2/3" src={logo} alt="" />
          </div>
          <div className="w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-4xl font-bold text-center">Register</h1>
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
                  <option>customer</option>
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
              </div>
              <div className="form-control mt-6">
                <PrimaryBtn type="submit" title={"Register"}></PrimaryBtn>
                <Link
                  onClick={handleGoogleLogin}
                  className="btn btn-outline mt-5 text-cyan-400 hover:bg-cyan-500"
                >
                  <FaGoogle />
                  Register With Google
                </Link>
              </div>
              <p className="text-center py-1">
                have an account{" "}
                <span className="text-cyan-500">
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
