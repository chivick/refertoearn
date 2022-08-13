import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../context/authContext";


const AuthRoute = ({ children }) => {
    const { user } = useContext(AuthContext)
    const location = useLocation()

    if(user) {
        return children
    } else {
        return <Navigate to='/login' replace state={{ from: location }} />
    }
  
}

export default AuthRoute