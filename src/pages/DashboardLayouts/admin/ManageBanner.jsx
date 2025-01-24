import useBanner from "./useBanner";

const ManageBanner = () => {
  const [data, isLoading] = useBanner()

  console.log(data);
  return (
    <>
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
                          <img
                            src={banners.image}
                            alt="banner advertise"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{banners.heading}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {banners.medicineDescription}
                  </td>
                  <td>{banners.sellerEmail}</td>
                  <th> 
                    <input type="checkbox" className="toggle"  checked />
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
