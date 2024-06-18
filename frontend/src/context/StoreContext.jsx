import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

  const url = "http://localhost:3000/";
  const userId = localStorage.getItem("user_id");
  const token = localStorage.getItem("token")
  const [urls, setUrls] = useState([]);

  const fetchUrls = async () => {
    const res = await fetch(url + "user/" + userId);
    const result = await res.json();
    const urlArray = result.allUrls;
    if(!token) return;
    urlArray.reverse();
    setUrls(urlArray);
  };

  async function logInUser(data) {
    const res = await fetch(url+"user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    
    localStorage.setItem("user_id", result.user._id)
    localStorage.setItem("token", result.token)
  }

  async function createUser(data) {
    const res = await fetch(url+"user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    
    localStorage.setItem("user_id", result.createUser._id)
    localStorage.setItem("token", result.token)
  }


  useEffect(() => {
    async function loadData(){
        fetchUrls();
    }
    loadData()
  }, [])

  const [toogle, setToogle] = useState(false);
  
  const contextValue = {
    urls, 
    setUrls,
    logInUser,
    createUser,
    toogle,
    setToogle,
    token,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
