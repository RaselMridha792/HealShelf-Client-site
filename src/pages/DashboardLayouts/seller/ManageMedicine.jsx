import AddMedicine from "./AddMedicine";
import useSellerMedicine from "./useSellerMedicine";

const ManageMedicine = () => {
    const [sellerMedicine] = useSellerMedicine();
    console.log(sellerMedicine)

    const closeModal = () => {
        document.getElementById("my_modal_4").close();
      };

  return (
    <>
      <div className="flex items-center justify-between flex-col md:flex-row">
        <h1 className="text-3xl text-center font-bold py-5">Manage Medicine</h1>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn btn-neutral"
          onClick={() => document.getElementById("my_modal_4").showModal()}
        >
          Add Medicine
        </button>
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <AddMedicine closeModal={closeModal}></AddMedicine>
            <div className="modal-action">
            </div>
          </div>
        </dialog>
      </div>
      <section className="my-20">
        <h1 className="text-3xl text-center font-bold ">
          Your Payment History
        </h1>
        <div className="mt-10">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="bg-cyan-500 text-white text-lg">
                <tr>
                  <th>#</th>
                  <th>name</th>
                  <th>category</th>
                  <th>price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {sellerMedicine &&
                  sellerMedicine.map((payment, index) => (
                    <tr key={payment._id}>
                      <th>{index + 1}</th>
                      <td><img className="w-12 h-12" src={payment.image} alt="" /></td>
                      <td>{payment.name}</td>
                      <td>{payment.category}</td>
                      <td>{payment.price}</td>
                      <td className="text-orange-500">{payment.status}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default ManageMedicine;
