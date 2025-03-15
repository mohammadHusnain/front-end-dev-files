import React from "react";
import userContext from "./userContext";

const userContextProvider = ({children}) =>{   // children is prop here 

    const [user, setUser] = React.useState(null)

    return <userContext.Provider value={{user,setUser}}>
{children}
    </userContext.Provider>;

}

export default userContextProvider