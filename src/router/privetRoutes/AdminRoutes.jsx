import { AuthContext } from "../../Context/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import useRole from "../../hooks/useRole";
import { useContext } from "react";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [role] = useRole();
  console.log(role)

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (role) {
    return children;
  }
  return (
    <>
      <Navigate to={"/login"}></Navigate>
    </>
  );
};

export default AdminRoutes;
