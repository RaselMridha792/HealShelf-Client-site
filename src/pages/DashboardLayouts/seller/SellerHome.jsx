import { GrMoney } from "react-icons/gr";
import { MdOutlinePaid, MdOutlinePendingActions } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { Helmet } from "react-helmet";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

const SellerHome = () => {
  const COLORS = ["#0088FE", "#FFBB28", "#FF8042", "#00C49F"];
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

  const SellData = [
    { name: "Revenue", value: totalPrice || 0 },
    { name: "Pending", value: data?.totalPending || 0 },
    { name: "Paid", value: data?.totalPaid || 0 },
  ];

  const SelllineCrtData = [
    { name: "January", revenue: 1000, pending: 19, paid: 10},
    { name: "February", revenue: 1300, pending: 29, paid: 12 },
    { name: "January", revenue: 1400, pending: 10, paid: 16},
    { name: "January", revenue: 1500, pending: 5, paid: 20 },
    {
      name: "January",
      revenue: totalPrice || 0,
      pending: data?.totalPending || 0,
      paid: data?.totalPaid  || 0,
    },
  ];

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
      <section className="flex flex-col lg:flex-row">
        <div className="hidden md:flex">
          <LineChart
            data={SelllineCrtData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            width={900}
            height={400}
            className="w-full"
          >
            {" "}
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#0088FE"
              strokeWidth={2}
            ></Line>
            <Line
              type="monotone"
              dataKey="pending"
              stroke="#FFBB28"
              strokeWidth={2}
            ></Line>
            <Line
              type="monotone"
              dataKey="paid"
              stroke="#00C49F"
              strokeWidth={2}
            ></Line>
            <Line
              type="monotone"
              dataKey="users"
              stroke="#FF8042"
              strokeWidth={2}
            ></Line>
          </LineChart>
        </div>
        <div>
          <PieChart width={400} height={300}>
            <Pie
              data={SellData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {SellData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </section>
    </>
  );
};

export default SellerHome;
