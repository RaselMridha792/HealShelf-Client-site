import { GrMoney } from "react-icons/gr";
import { MdOutlinePaid, MdOutlinePendingActions } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { Helmet } from "react-helmet";

const SellerHome = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loader } = useContext(AuthContext);
  const email = user?.email;
  const { data } = useQuery({
    queryKey: ["data"],
    enabled: !loader,
    queryFn: async () => {
      const res = await axiosSecure.get(`/seller-stats/${email}`);
      return res.data;
    },
  });
  const totalPrice = data?.totalPrice.toFixed(2);
  return (
    <>
      <section className="my-10">
      <Helmet>
        <title>Seller | Dashboard</title>
        <meta name="Heal shelf" content="Helmet application" />
      </Helmet>
        <h1 className="text-center text-3xl font-bold uppercase">Dashboard</h1>
        <hr className="my-5" />
        <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-orange-400 text-white py-10 flex items-center justify-center">
            <div className="text-2xl flex gap-2 font-bold">
              <GrMoney className="text-6xl" />
              <div>
                <p> total Revenue</p>
                <p>${totalPrice ? totalPrice : 0}</p>
              </div>
            </div>
          </div>
          <div className="bg-pink-400 text-white py-10 flex items-center justify-center">
            <h1 className="text-2xl font-bold flex gap-2">
              <MdOutlinePendingActions className="text-6xl" />
              <div>
                <p>total Pending</p>
                <p>{data ? data.totalPending : 0}</p>
              </div>
            </h1>
          </div>
          <div className="bg-cyan-400 text-white py-10 flex items-center justify-center">
            <h1 className="text-2xl font-bold flex gap-2">
              <MdOutlinePaid className="text-6xl" />
              <div>
                <p>total Paid</p>
                <p>{data ? data.totalPaid : 0}</p>
              </div>
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default SellerHome;
