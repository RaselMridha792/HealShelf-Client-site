import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../shared/Loader";

const AskForAdvertise = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const {data, isLoading} = useQuery({
    queryKey: ["banner", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/seller-banner-data/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <h1 className="text-3xl text-center uppercase font-bold py-5">
        Request Admin For The Ads
      </h1>
      <h1 className="text-2xl font-bold text-center py-5 capitalize">
        manage banner advertise
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-cyan-500 text-white">
            <tr>
              <th>image & Name</th>
              <th>sub heading</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {isLoading ? (
              <>
              <Loader></Loader>
              </>
            ) : (
              data?.map((banners) => (
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
                  <td>{banners.subheading}</td>
                  <td>{banners.medicineDescription}</td>
                  <th>
                    {banners.status}
                  </th>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AskForAdvertise;
