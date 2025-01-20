import { useEffect } from "react";
import Loader from "../shared/Loader";
import usePayments from "./usePayments";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManagePayments = () => {
  const [payments, isLoading, refetch] = usePayments();
  const data = Array.isArray(payments) ? payments : [];
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    refetch();
  }, [refetch]);

  const handleChangeStatus = (id, selectedStatus) => {
    console.log(id, selectedStatus)
    axiosSecure
      .patch(`/payment/status/${id}`, { selectedStatus })
      .then((res) => {
        console.log(res);
        if(res.data.modifiedCount > 0){
            Swal.fire({
                title: "payment successful",
                icon: "success",
                draggable: true
              });
              refetch()
        }
      });
  };

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
                  <th>Email</th>
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
                        <select
                          onChange={(event) =>
                            handleChangeStatus(payment._id, event.target.value)
                          }
                        >
                          {payment.status == "processing" && (
                            <option name="processing" value="processing">
                              pending
                            </option>
                          )}
                          {payment.status == "paid" && (
                            <option name="paid" value="paid">
                              accepted
                            </option>
                          )}
                          <option name="paid" value="paid">
                            accept payment
                          </option>
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
