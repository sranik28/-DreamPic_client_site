import { createContext, useContext, useState } from "react"

const CreateAuth = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();



    const authData = {
        user
    }


    return <CreateAuth.Provider value={authData}>
        {children}
    </CreateAuth.Provider>
}

const useAuthGlobally = () => {
    return useContext(CreateAuth)
}

export { AuthProvider, useAuthGlobally }