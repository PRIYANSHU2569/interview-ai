import { createContext,useState } from "react";


export const AuthContext = createContext()


export const AuthProvider = ({ children }) => { 

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [isInitializing, setIsInitializing] = useState(true)
    const [error, setError] = useState("")

    


    return (
        <AuthContext.Provider value={{user,setUser,loading,setLoading,isInitializing,setIsInitializing,error,setError}} >
            {children}
        </AuthContext.Provider>
    )

    
}
