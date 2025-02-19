import { useContext } from "react";
import useCart from "../../hooks/useCart";
import Loader from "../DashboardLayouts/shared/Loader";
import CartFields from "./CartFields";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const UserCart = () => {
  const [cart, refetch, isLoading] = useCart();
  const { user , changeColor} = useContext(AuthContext);
  const email = user?.email;
  const axiosSecure = useAxiosSecure();
  const totalPrices = cart?.reduce((total, item) => total +( item.mainPrice*item.quantity), 0);
  const totalPrice = Math.round(totalPrices * 100)/ 100;
  const handleDeleteAll = () => {
    Swal.fire({
      title: `Are you sure?`,
      text: "do you want to delete all items?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/user/cart/delete-all/${email}`)
          .then((res) => {
            console.log(res);
            refetch();
          })
          .catch((error) => {
            console.log(error);
          });
        Swal.fire({
          title: "Deleted!",
          text: "All cart items has been deleted",
          icon: "success",
        });
      }
    });
  };
  return (
    <>
      <section className={`my-20 max-w-screen-2xl mx-auto px-5 ${changeColor?'text-black':'text-white'}`}>
      <Helmet>
        <title>Heal shelf | My Cart</title>
        <meta name="Heal shelf" content="Helmet application" />
      </Helmet>
          <h1 className="font-bold md:text-2xl text-lg py-5">My Cart Items ({cart?.length})</h1>
        <div className="flex flex-col md:flex-row gap-5 items-center justify-between pt-10">
          <h1 className="font-bold md:text-2xl text-lg py-5">Total Price : {totalPrice} </h1>
          <div>
            {!cart?.length ? (
              <button disabled className="btn">CheckOut</button>
            ) : (
              <Link to="/dashboard/checkout" className="btn btn-neutral text-white">
                CheckOut
              </Link>
            )}
          </div>
          <div>
            <button onClick={handleDeleteAll} className="btn btn-neutral text-white">
              clear cart
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name, Image</th>
                <th>Company</th>
                <th>Price Per Unit</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {isLoading ? (
                <Loader></Loader>
              ) : (
                cart?.map((cartItems) => (
                  <CartFields
                    key={cartItems._id}
                    cartItems={cartItems}
                  ></CartFields>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default UserCart;
