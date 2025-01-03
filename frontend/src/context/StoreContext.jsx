import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

  const url = "https://vitly-backend.onrender.com/";
  const userId = localStorage.getItem("user_id")
  const userToken = localStorage.getItem("token")
  const name = localStorage.getItem("name")
  const [urls, setUrls] = useState([]);
  const [token, setToken] = useState("")
  const [current, setCurrent] = useState("links")
  
  const contextValue = {
    urls, 
    url,
    setUrls,
    token,
    setToken,
    userToken,
    name,
    userId,
    current,
    setCurrent,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
