import { useContext, useState } from "react";
import { MdRemoveRedEye } from "react-icons/md";
import { AuthContext } from "../../Context/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";

const RowCard = ({ product }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModal, setIsModal] = useState(null);
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const email = user?.email;

  const { _id, name, image, price, manufacturer, sellerEmail } = product;
  const sellerEmails = sellerEmail || 'raselmridha792@gmail.com';
  const mainPrice = parseFloat(price.slice(1, 5));
  const handleOpenModal = () => {
    setSelectedProduct(product);
    setIsModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setIsModal(false);
  };

  const handleAddToCart = async (id) => {
    const cartData = {
      email,
      id,
      name,
      image,
      mainPrice,
      manufacturer,
      quantity: 1,
      sellerEmail: sellerEmails,
    };
    const res = await axiosSecure.post("/products/add-cart", cartData);
    if (res.data.acknowledged) {
      Swal.fire({
        title: "Added to the Cart",
        icon: "success",
        draggable: true,
      });
      refetch();
    }
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
        <td>{price}</td>
        <div className="mt-3 ml-4">
          <button
            onClick={() => handleAddToCart(_id)}
            className="btn text-white bg-orange-400"
          >
            Select
          </button>
        </div>
        <th>
          <button onClick={handleOpenModal} className="btn btn-ghost text-3xl">
            <MdRemoveRedEye />
          </button>
        </th>
      </tr>
      {isModal && (
        <dialog id="my_modal_4" className="modal" open>
          <div className="modal-box">
            <img className="w-52 md:w-96" src={selectedProduct?.image} alt="" />
            <div className="flex gap-5 items-center">
              <h3 className="font-bold text-lg">{selectedProduct?.name}</h3>
              <p className="text-lg font-bold">{selectedProduct?.price}</p>
            </div>
            <p className="pt-4">
              <span className="font-bold">description: </span>
              {selectedProduct?.description}
            </p>
            <p className="pt-2">
              <span className="font-bold">Dosage:</span>{" "}
              {selectedProduct?.dosage}
            </p>
            <p className="pt-2">
              <span className="font-bold">manufacturer: </span>{" "}
              {selectedProduct?.manufacturer}
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button, it will close the modal */}
                <button onClick={handleCloseModal} className="btn bg-cyan-400">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default RowCard;
