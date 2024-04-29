import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

function EmailVerifyRoute({ children }) {
    const { emailCheck, user } = useContext(AuthContext);

    if (!user) {
        return <Navigate to={"/login"} />;
    } else {
        return children;
    }
}

EmailVerifyRoute.propTypes = {
    children: PropTypes.node,
};

export default EmailVerifyRoute;