import { useState,useEffect, useContext } from 'react'
import './index.css'
import Loader from './Components/Loader';
import { AppData } from './Context/ApplicationData';
import axios from 'axios';
import Card from './Components/Card';

function App() {
 
 const {loader,setLoader,fetchData}=useContext(AppData);

  

 useEffect(() => {

    const d = setTimeout(() => {

      setLoader(false);
      fetchData();
    }, 5000)

    return () => clearTimeout(d);
  }, []);

 if(loader){
   return <Loader/>
 }

 

 
 
return (
   <Card/>
)
  
    
  
}

export default App
