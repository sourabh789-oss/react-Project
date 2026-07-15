import React, { useState,createContext } from "react";
import axios from "axios";
export const AppData=createContext();
const ApplicationData=({children})=>{
const [loader,setLoader]=useState(true);
const [data,setData]=useState([]);
 const fetchData=async()=>{
     try{

    
     const response=await axios.get("https://jsonplaceholder.typicode.com/posts")
     
      setData(response?.data);
     }catch(err){
      console.log(err);

     }
    
     
  }

    return <AppData.Provider value={{loader,setLoader,fetchData,data}}>{children}</AppData.Provider>
}



export default ApplicationData;