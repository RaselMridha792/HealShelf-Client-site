import { AuthContext } from "../../Context/AuthProvider";
import { Navigate } from "react-router-dom";
import useRole from "../../hooks/useRole";
import { useContext } from "react";

const AdminRoutes = ({ children }) => {
  const { loading, logOutUser } = useContext(AuthContext);
  const [role, isLoading] = useRole();

  if (loading || isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (role !== "admin") {
    return logOutUser();
  }
  if (role == "admin") {
    return children;
  }
  return (
    <>
      <Navigate to={"/login"}></Navigate>
    </>
  );
};

export default AdminRoutes;
