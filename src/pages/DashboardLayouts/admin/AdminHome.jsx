import { FaUsers } from "react-icons/fa";
import { MdOutlinePaid, MdOutlinePendingActions } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
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

const AdminHome = () => {
  const COLORS = ["#0088FE", "#FFBB28", "#FF8042", "#00C49F"];
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
  const data = [
    { name: "Revenue", value: stats?.revenue || 0 },
    { name: "Pending", value: pending?.length || 0 },
    { name: "Paid", value: paid?.revenue || 0 },
    { name: "Users", value: stats?.users || 0 },
  ];

  const lineCrtData = [
    { name: "January", revenue: 1000, pending: 19, paid: 10, users: 1 },
    { name: "February", revenue: 1300, pending: 29, paid: 12, users: 3 },
    { name: "January", revenue: 1400, pending: 10, paid: 16, users: 5 },
    { name: "January", revenue: 1500, pending: 5, paid: 20, users: 7 },
    {
      name: "January",
      revenue: stats?.revenue || 0,
      pending: pending?.length || 0,
      paid: paid?.length || 0,
      users: stats?.users || 0,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Heal shelf | Admin</title>
        <meta name="Heal shelf" content="Helmet application" />
      </Helmet>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-orange-400 rounded-lg text-white py-10 flex items-center justify-center">
          <div className="text-2xl flex gap-2 font-bold">
            <GrMoney className="text-6xl" />
            <div>
              <p> total Revenue</p>
              <p>$ {stats?.revenue}</p>
            </div>
          </div>
        </div>
        <div className="bg-pink-400 rounded-lg text-white py-10 flex items-center justify-center">
          <h1 className="text-2xl font-bold flex gap-2">
            <MdOutlinePendingActions className="text-6xl" />
            <div>
              <p>total Pending</p>
              <p>{pending?.length}</p>
            </div>
          </h1>
        </div>
        <div className="bg-cyan-400 rounded-lg text-white py-10 flex items-center justify-center">
          <h1 className="text-2xl font-bold flex gap-2">
            <MdOutlinePaid className="text-6xl" />
            <div>
              <p>total Paid</p>
              <p>{paid?.length}</p>
            </div>
          </h1>
        </div>
        <div className="bg-purple-400 rounded-lg text-white py-10 flex items-center justify-center">
          <h1 className="text-2xl font-bold flex gap-2">
            <FaUsers className="text-6xl"></FaUsers>
            <div>
              <p>total User</p>
              <p className="text-4xl">{stats?.users}</p>
            </div>
          </h1>
        </div>
      </div>
      <section className="flex flex-col lg:flex-row">
        <div className="hidden md:flex">
          <LineChart
            data={lineCrtData}
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
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
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

export default AdminHome;
