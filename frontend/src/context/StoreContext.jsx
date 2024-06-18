import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const url = "http://localhost:3000/";
  const userId = localStorage.getItem("user_id");
  const [urls, setUrls] = useState([]);

  const fetchUrls = async () => {
    const res = await fetch(url + "user/" + userId);
    const result = await res.json();
    setUrls(result.allUrls);
  };

  useEffect(() => {
    async function loadData(){
        fetchUrls();
    }
    loadData()
  }, [])
  

  const contextValue = {
    urls, 
    setUrls,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;