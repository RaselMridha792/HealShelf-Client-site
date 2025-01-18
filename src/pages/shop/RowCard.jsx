import { useState } from "react";
import { MdRemoveRedEye } from "react-icons/md";

const RowCard = ({ product }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModal, setIsModal] = useState(null);

  const { _id, name, image, description, dosage, manufacturer, price } =
    product;

  const handleOpenModal = () => {
    setSelectedProduct(product);
    setIsModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setIsModal(false);
  };

  const handleAddToCart = (id) => {
    console.log(id);
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
          <button onClick={() => handleAddToCart(_id)} className="btn bg-orange-400">
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
            <img className="w-52 md:w-96" src={image} alt="" />
            <div className="flex gap-5 items-center">
              <h3 className="font-bold text-lg">{name}</h3>
              <p className="text-lg font-bold">{price}</p>
            </div>
            <p className="pt-4">
              <span className="font-bold">description: </span>
              {description}
            </p>
            <p className="pt-2">
              <span className="font-bold">Dosage:</span> {dosage}
            </p>
            <p className="pt-2">
              <span className="font-bold">manufacturer: </span> {manufacturer}
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
