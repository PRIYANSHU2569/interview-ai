import { createContext,useState } from "react";


export const AuthContext = createContext()


export const AuthProvider = ({ children }) => { 

    const [user, setUser] = useState(null)
    // Wait for the initial /get-me request before protected routes decide whether
    // the visitor is authenticated.
    const [loading, setLoading] = useState(true)

    


    return (
        <AuthContext.Provider value={{user,setUser,loading,setLoading}} >
            {children}
        </AuthContext.Provider>
    )

    
}
