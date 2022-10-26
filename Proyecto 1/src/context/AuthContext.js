import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const useAuth =() => {
    const auth = useContext(AuthContext);
    return auth;
}

const inicial = JSON.parse(sessionStorage.getItem('authUser'));

const AuthProvider = ( {children} ) => {
    const [isLogin, setIsLogin] = useState(inicial);

    const Auth = () => {
        if(isLogin !== " "){
            setIsLogin(isLogin)
        }else{
            setIsLogin(isLogin)
        }
    }
    return <AuthContext.Provider value={{isLogin, Auth}}>{children}</AuthContext.Provider>

 }

export { AuthProvider };

export { inicial };

export { useAuth };

export {AuthContext};
