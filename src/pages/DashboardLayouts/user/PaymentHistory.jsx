import useHistory from "../../../hooks/useHistory";

const PaymentHistory = () => {
  const [payments] = useHistory();
  return (
    <>
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
                  <th>Transaction Id</th>
                  <th>date</th>
                  <th>Total Paid</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {payments &&
                  payments.map((payment, index) => (
                    <tr key={payment._id}>
                      <th>{index + 1}</th>
                      <td>{payment.transactionId}</td>
                      <td>{payment.date}</td>
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

export default PaymentHistory;
