
import React, {useState, useContext} from 'react';
import { GlobalContext } from '../GlobalStates';
//import {GlobalContext} from '../Context/GlobalState';
 
export const Counter = () => {
   
   const { handleInc,handleDec ,counter} = useContext(GlobalContext);
 
   const handleSubmit = (e) => {
    // e.preventDefault()
           handleInc()
          
   }
 
   
 
   return (
     <div>  <h3>{counter}</h3>
        <button onClick={handleSubmit}>Inc</button>
        <button onClick={handleDec}>Dec</button>
         
        
      </div>
   )
}