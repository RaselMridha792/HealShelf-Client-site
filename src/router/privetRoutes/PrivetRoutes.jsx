import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivetRoutes;
