
import React, {useContext} from 'react';
import { GlobalContext } from '../GlobalStates';
//import {GlobalContext} from '../Context/GlobalState';
 
export const RemoveItem = (props) => {
   const {item} = props;
 
   const { removeItemFromList } = useContext(GlobalContext);
 
   const handleClick = () => {
       removeItemFromList(item);
   }
  
   return(
    <> <button onClick = {handleClick} className = 'remove-btn'> X </button>
   
    </>
      

   )
}
