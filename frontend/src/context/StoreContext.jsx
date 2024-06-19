import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

  const url = "http://localhost:3000/";
  const userId = localStorage.getItem("user_id")
  const userToken = localStorage.getItem("token")
  const [urls, setUrls] = useState([]);
  const [toogle, setToogle] = useState(false);
  const [token, setToken] = useState("")
  
  const contextValue = {
    urls, 
    url,
    setUrls,
    toogle,
    setToogle,
    token,
    setToken,
    userToken,
    userId,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
