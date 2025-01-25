import { useEffect, useRef } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { FaDownload } from "react-icons/fa";
import usePayments from "./usePayments";
import Loader from "../shared/Loader";

const SalesReport = () => {
  const [payments, isLoading, refetch] = usePayments();
  const data = Array.isArray(payments) ? payments : [];
  useEffect(() => {
    refetch();
  }, [refetch]);
  const tableRef = useRef(null);
  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <DownloadTableExcel
        filename="users table"
        sheet="users"
        currentTableRef={tableRef.current}
      >
        <button className="btn btn-neutral">
          Export excel <FaDownload></FaDownload>
        </button>
      </DownloadTableExcel>
      <div className="overflow-x-auto">
        <table className="table" ref={tableRef}>
          <tbody>
            <tr>
              <th>Medicine Name</th>
              <th>Seller Email</th>
              <th>Buyer Email</th>
              <th>Total Price</th>
              <th>Date</th>
            </tr>
            {data?.map((payment) => (
              <tr key={payment._id}>
                <td>acme</td>
                <td>{payment.sellerEmail || "raselmridha792@gmail.com"} </td>
                <td>{payment.email}</td>
                <td>${payment.price.toFixed(2)}</td>
                <td>{payment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesReport;
