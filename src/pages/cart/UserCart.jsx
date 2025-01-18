import { FaRegTrashAlt } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import Loader from "../DashboardLayouts/shared/Loader";
import CartFields from "./CartFields";

const UserCart = () => {
    const [cart, refetch, isLoading] = useCart()
  return (
    <>
      <section className="my-20 max-w-screen-2xl mx-auto px-5">
        <div className="flex items-center justify-between pt-10">
          <h1 className="font-bold text-2xl py-5">My Cart Items ()</h1>
          <div>
            <button className="btn btn-neutral">clear cart</button>
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
              {isLoading? <Loader></Loader>:
              cart.map(cartItems => <CartFields key={cartItems._id} cartItems={cartItems}></CartFields>)
              }
              
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default UserCart;
