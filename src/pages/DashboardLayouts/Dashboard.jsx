import { Outlet } from "react-router-dom";
import DashboardNav from "./shared/DashboardNav";

const Dashboard = () => {
  return (
    <>
      <section className="flex">
        <DashboardNav></DashboardNav>
        <div className="mt-24 max-w-screen-xl w-full mx-auto px-5">
          <Outlet></Outlet>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
