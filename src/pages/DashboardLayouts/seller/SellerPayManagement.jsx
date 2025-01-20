import Loader from "../shared/Loader";
import useSellerPayment from "./useSellerPayment";

const SellerPayManagement = () => {
  const [sellerPayment, refetch, isLoading] = useSellerPayment();
  return (
    <>
      <div>
        <section className="my-20">
          <h1 className="py-5 text-3xl font-bold text-center">
            Manage Payments
          </h1>
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead className="bg-cyan-500 text-white text-lg">
                  <tr>
                    <th>#</th>
                    <th>Buyer Email</th>
                    <th>transaction id</th>
                    <th>Date</th>
                    <th>Total price</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <Loader></Loader>
                  ) : (
                    sellerPayment &&
                    sellerPayment.map((payment, index) => (
                      <tr key={payment._id}>
                        <th>{index + 1}</th>
                        <td>{payment.email}</td>
                        <td>{payment.transactionId}</td>
                        <td>{payment.date}</td>
                        <td>{payment.price}</td>
                        <td className="text-orange-500">{payment.status}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SellerPayManagement;
