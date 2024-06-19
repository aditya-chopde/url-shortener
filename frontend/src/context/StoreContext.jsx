import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

  const url = "http://localhost:3000/";
  const [urls, setUrls] = useState([]);
  const [toogle, setToogle] = useState(false);
  const [token, setToken] = useState("")

  // const fetchUrls = async () => {
  //   const res = await fetch(url + "user/" + userId);
  //   const result = await res.json();
  //   const urlArray = result.allUrls;
  //   if(!token) return;
  //   urlArray.reverse();
  //   setUrls(urlArray);
  // };

  // useEffect(() => {
  //   async function loadData(){
  //       fetchUrls();
  //   }
  //   loadData()
  // }, [])

  
  const contextValue = {
    urls, 
    url,
    setUrls,
    toogle,
    setToogle,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
