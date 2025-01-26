import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useBanner from "./useBanner";
import { Helmet } from "react-helmet";

const ManageBanner = () => {
  const [data, isLoading, refetch] = useBanner();
  const axiosSecure = useAxiosSecure();


  const handleStatus = (id, currentStatus) => {
    const newStatus = currentStatus === "accept" ? "pending" : "accept";
    axiosSecure.patch(`/admin/change-status/${id}`,
      { status: newStatus }
    ).then(res =>{
      if(res.data.modifiedCount > 0){
        refetch()
        Swal.fire({
          title: "Status changed!",
          icon: "success",
          draggable: false,
          timer: 1500,
        });
      }
    }).catch(error => console.log(error.message))
  };
  return (
    <>
            <Helmet>
        <title>Admin | Manage Banner ads</title>
        <meta name="Heal shelf" content="Helmet application" />
      </Helmet>
      <h1 className="text-2xl font-bold text-center py-5 capitalize">
        manage banner advertise
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-cyan-500 text-white">
            <tr>
              <th>image & Name</th>
              <th>Description</th>
              <th>seller email</th>
              <th>Change Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {isLoading ? (
              <></>
            ) : (
              data.map((banners) => (
                <tr key={banners._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={banners.image} alt="banner advertise" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{banners.heading}</div>
                      </div>
                    </div>
                  </td>
                  <td>{banners.medicineDescription}</td>
                  <td>{banners.sellerEmail}</td>
                  <th>
                    <input
                      type="checkbox"
                      className="toggle"
                      checked={banners.status === "accept"}
                      onChange={() => handleStatus(banners._id, banners.status)}
                    />
                  </th>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageBanner;
