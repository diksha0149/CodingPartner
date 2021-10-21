import { useState, useEffect ,createContext } from "react";
import { auth } from "../../utils/firebase"
const AuthContext = createContext(null)

export const AuthProvider = ({ children })=>{
  const [user,setUser] = useState()

  useEffect(()=>{
      auth.onAuthStateChanged((user)=>{
          setUser(user);

      });
  },[]);
    return (<AuthContext.Provider value={{user}} >
        {children}
        </AuthContext.Provider>);

}
