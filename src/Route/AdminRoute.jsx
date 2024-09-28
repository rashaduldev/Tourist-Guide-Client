import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { CirclesWithBar } from "react-loader-spinner";
import useAdmin from "../Hooks/useAdmin";

// eslint-disable-next-line react/prop-types
const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(); // Use the isAdmin hook
  const location = useLocation();

  // Show loading spinner while loading admin status
  if (loading || isAdminLoading) {
    return (
      <div className="text-center mx-auto flex justify-center py-10">
        <CirclesWithBar
          height="100"
          width="100"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          outerCircleColor=""
          innerCircleColor=""
          barColor=""
          ariaLabel="circles-with-bar-loading"
        />
      </div>
    );
  }

  // If the user is not logged in or not an admin, redirect to home page
  if (!user || !isAdmin) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // If the user is an admin, render the children components
  return children;
};

export default AdminRoute;
