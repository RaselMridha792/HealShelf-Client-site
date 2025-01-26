import { FaUsers } from "react-icons/fa";
import { MdOutlinePaid, MdOutlinePendingActions } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";

const AdminHome = () => {
  //   const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const orders = stats?.orders;
  const status = orders?.map((items) => items.status);
  const pending = status?.filter((pendingItem) => pendingItem == "processing");
  const paid = status?.filter((pendingItem) => pendingItem == "paid");

  return (
    <>
      <Helmet>
        <title>Heal shelf | Admin</title>
        <meta name="Heal shelf" content="Helmet application" />
      </Helmet>
      <h1 className="text-3xl font-bold pt-5">Hi, Welcome to dashboard</h1>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-orange-400 text-white py-10 flex items-center justify-center">
          <div className="text-2xl flex gap-2 font-bold">
            <GrMoney className="text-6xl" />
            <div>
              <p> total Revenue</p>
              <p>$ {stats?.revenue}</p>
            </div>
          </div>
        </div>
        <div className="bg-pink-400 text-white py-10 flex items-center justify-center">
          <h1 className="text-2xl font-bold flex gap-2">
            <MdOutlinePendingActions className="text-6xl" />
            <div>
              <p>total Pending</p>
              <p>{pending?.length}</p>
            </div>
          </h1>
        </div>
        <div className="bg-cyan-400 text-white py-10 flex items-center justify-center">
          <h1 className="text-2xl font-bold flex gap-2">
            <MdOutlinePaid className="text-6xl" />
            <div>
              <p>total Paid</p>
              <p>{paid?.length}</p>
            </div>
          </h1>
        </div>
        <div className="bg-purple-400 text-white py-10 flex items-center justify-center">
          <h1 className="text-2xl font-bold flex gap-2">
            <FaUsers className="text-6xl"></FaUsers>
            <div>
              <p>total User</p>
              <p className="text-4xl">{stats?.users}</p>
            </div>
          </h1>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
