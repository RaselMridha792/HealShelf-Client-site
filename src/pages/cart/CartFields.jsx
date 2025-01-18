import { FaRegTrashAlt } from "react-icons/fa";
const CartFields = ({cartItems}) => {
    const {_id, email, id, name, image, mainPrice, manufacturer,quantity } = cartItems;
  return (
    <>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={image}
                  alt="Avatar Tailwind CSS Component"
                />
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
          <button className="btn bg-red-600 text-white text-xl ">
            <FaRegTrashAlt />
          </button>
        </th>
      </tr>
    </>
  );
};

export default CartFields;
