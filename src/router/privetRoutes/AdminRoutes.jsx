import { AuthContext } from "../../Context/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import useRole from "../../hooks/useRole";
import { useContext } from "react";

const AdminRoutes = ({ children }) => {
  const { user, loader, logOutUser } = useContext(AuthContext);
  const [role] = useRole();
  const navigate = useNavigate()
  if (loader) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (role !== "admin") {
    logOutUser();
    navigate()
  }
  if (user && role == "admin") {
    return children;
  }
  return (
    <>
      <Navigate to={"/login"}></Navigate>
    </>
  );
};

export default AdminRoutes;
