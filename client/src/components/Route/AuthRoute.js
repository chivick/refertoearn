import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import decode from 'jwt-decode'

import { AuthContext } from "../../context/authContext";


const AuthRoute = ({ children }) => {
    const { user } = useContext(AuthContext)
    const location = useLocation()

    const localUser = JSON.parse(localStorage.getItem('user'))

    const token = user?.token || localUser?.token

    let validToken = false

    if(token) {
        const decodedToken = decode(token)
    
        if(decodedToken.exp * 1000 < new Date().getTime()) {
            validToken = false
        } else {
            validToken = true
        }
    }


    if(validToken) {
        return children
    } else {
        return <Navigate to='/login' replace state={{ from: location }} />
    }
  
}

export default AuthRoute