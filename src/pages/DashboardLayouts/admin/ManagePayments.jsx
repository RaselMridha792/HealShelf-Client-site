import { useEffect } from "react";
import Loader from "../shared/Loader";
import usePayments from "./usePayments";


const ManagePayments = () => {
    const [payments, isLoading, refetch] = usePayments();
    const data = Array.isArray(payments) ? payments : [];
    useEffect(()=>{
        refetch()
    },[refetch])

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
                  {isLoading ? (
                    <Loader></Loader>
                  ) : (
                    data?.map((payment, index) => (
                      <tr key={payment._id}>
                        <th>{index + 1}</th>
                        <td>{payment.email}</td>
                        <td>{payment.date}</td>
                        <td>{payment.price}</td>
                        <td>
                          <select name="" id="">
                            <option value="">{payment.status}</option>
                            <option value="">paid</option>
                          </select>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
    </>
  );
};

export default ManagePayments;
