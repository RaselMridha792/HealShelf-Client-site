import { useEffect, useRef, useState } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { FaDownload, FaList } from "react-icons/fa";
import usePayments from "./usePayments";
import Loader from "../shared/Loader";
import { Helmet } from "react-helmet";

const SalesReport = () => {
  const [sort, setSort] = useState(false);
  const [payments, isLoading, refetch] = usePayments(sort);
  const data = Array.isArray(payments) ? payments : [];
  useEffect(() => {
    refetch();
  }, [refetch]);
  const tableRef = useRef(null);
  if (isLoading) {
    return <Loader></Loader>;
  }
  const item = data?.map(single => single.itemName);
  const buyItem = item[0]
  console.log(buyItem)
  return (
    <div>
              <Helmet>
        <title>Admin | Sales Report</title>
        <meta name="Heal shelf" content="Helmet application" />
      </Helmet>
      <div className="py-10 flex items-center justify-between">
        <h1 className="text-3xl font-bold capitalize">Sales Report</h1>
        <button onClick={()=>setSort(!sort)} className={`btn ${sort?'btn-success':'btn-neutral'}`}><FaList></FaList> {sort?'filtered by date':'filter By Date'} </button>
      </div>
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
                <td>{buyItem.map((item, idx) => <li key={idx}>{item}</li>)}</td>
                <td>
                  {payment.sellerEmail
                    ? payment.sellerEmail
                    : "raselmridha792@gmail.com"}{" "}
                </td>
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
