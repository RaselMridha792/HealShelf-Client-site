import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { user, upDateUser } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    upDateUser(name, photo)
      .then(() => {
        Swal.fire({
          title: "profile updated successfully",
          icon: "success",
          draggable: true,
        });
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <section className="my-32 max-w-screen-2xl mx-auto px-5 flex items-center justify-center">
        <div className="border p-10 rounded-xl shadow-xl flex flex-col gap-3 items-center">
          <img
            className="rounded-full border-4 border-cyan-600 w-40 h-40 object-cover"
            src={user?.photoURL}
            alt=""
          />
          <div>
            <h1 className="text-xl font-bold">Name: {user?.displayName}</h1>
            <h1 className="text-xl font-bold">Email: {user?.email}</h1>
          </div>
          <hr />
          <div>
            <form onSubmit={handleUpdateProfile}>
              <div className="flex gap-5 md:flex-row flex-col">
                <label className="w-full">
                  <h1>Name</h1>
                  <input
                    type="text"
                    name="name"
                    className="input input-bordered w-full "
                    placeholder="enter your name"
                  />
                </label>
                <label className="w-full">
                  <h1>Photo Url</h1>
                  <input
                    type="url"
                    name="photo"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <input
                type="submit"
                value="Update profile"
                className="btn mt-5 w-full btn-neutral"
              />
            </form>
            {/* <p className="text-red-500">{errorMessage}</p> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
