import React, { Children } from 'react'
import Loader from './Loader'
import { useState,useEffect } from 'react'
import Index from './Index';

function Loaderfunc() {

    const[isLoading,setIsLoading]=useState(true);

    useEffect(() => {
        const timer=setTimeout(()=>{
            setIsLoading(false);
        },8000)
    
    
        return () =>clearTimeout(timer);
    }, []);
    

  return (
    <>
      {isLoading ? <Loader /> : <Index />}
    </>
  )
};

export default Loaderfunc;
