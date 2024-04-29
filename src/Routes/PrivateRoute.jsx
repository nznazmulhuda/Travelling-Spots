import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext);
    const { pathname } = useLocation();

    if (user) {
        return children;
    } else if (loading) {
        return (
            <div className="flex items-center justify-center my-8 md:my-9 lg:my-10"><span className="loading loading-spinner loading-lg"></span></div>
        );
    } else {
        return <Navigate state={pathname} to={"/login"} />;
    }
}

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;