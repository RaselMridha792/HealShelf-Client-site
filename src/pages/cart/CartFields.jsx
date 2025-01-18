import { FaRegTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";
const CartFields = ({ cartItems }) => {
  const { _id, name, image, mainPrice, manufacturer, quantity } = cartItems;
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete item!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/user/cart/${id}`)
          .then((res) => {
            console.log(res);
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Item has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };
  return (
    <>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
            </div>
          </div>
        </td>
        <td>{manufacturer}</td>
        <td>${mainPrice}</td>
        <td>
          <div className="flex items-center justify-center gap-4 p-4">
            {/* Decrease Button */}
            <button
              //   onClick={handleDecrease}
              className="btn btn-outline btn-sm"
              //   disabled={quantity <= 1}
            >
              -
            </button>

            {/* Quantity Input */}
            <input
              type="text"
              value={quantity}
              readOnly
              className="input input-bordered input-sm w-12 text-center"
            />

            {/* Increase Button */}
            <button
              //   onClick={handleIncrease}
              className="btn btn-outline btn-sm"
            >
              +
            </button>
          </div>
        </td>
        <th>
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-red-600 text-white text-xl "
          >
            <FaRegTrashAlt />
          </button>
        </th>
      </tr>
    </>
  );
};

export default CartFields;
