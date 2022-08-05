import React, { useState } from "react"

export const AuthContext = React.createContext({
    isAuthenticated: false,
    setIsAuthenticated: () => {},
    user: null,
    setUser: (user) => {}
})


const AuthContextProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState(null)

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            setIsAuthenticated,
            user,
            setUser
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider