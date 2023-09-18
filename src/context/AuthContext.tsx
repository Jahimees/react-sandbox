import {createContext, ReactNode, useContext} from "react";
import AuthStore from "../stores/AuthStore";

const AuthContext = createContext(AuthStore);

export const useAuthContext = () => {
    const Context = useContext(AuthContext);

    if (Context === undefined) {
        console.log("ERROR")
    }

    return Context
}

export const AuthContextProvider = ({children} : {children: ReactNode}) => {

    return (
        <AuthContext.Provider value={AuthStore} >
            {children}
        </AuthContext.Provider>
    )
}