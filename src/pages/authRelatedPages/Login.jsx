import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/authRelated/doctorLogin.png";
import PrimaryBtn from "../../Components/shared/PrimaryBtn";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
const Login = () => {
  const { LoginUser, signInGoogle } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    LoginUser(data.email, data.password)
      .then((res) => {
        console.log("login successful");
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Profile Created Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true })
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
          navigate('/');
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
      <Helmet>
        <title>Heal Shelf | Login</title>
        <meta name="Heal shelf" content="Helmet application" />
      </Helmet>
        <div className="hero-content flex-col-reverse items-center justify-evenly gap-10 lg:flex-row-reverse">
          <div>
            <img className="w-2/3" src={Logo} alt="" />
          </div>
          <div className="card bg-base-100 w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-3xl font-bold text-center">Login</h1>
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password")}
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
                <PrimaryBtn type="submit" title={"login"}></PrimaryBtn>
                <Link
                  onClick={handleGoogleLogin}
                  className="btn btn-outline mt-5 text-cyan-400 hover:bg-cyan-400"
                >
                  <FaGoogle />Login With Google
                </Link>
              </div>
              <p className="text-center py-1">
                Don`t have an account{" "}
                <span className="text-cyan-500">
                  <Link to="/register">please register</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
