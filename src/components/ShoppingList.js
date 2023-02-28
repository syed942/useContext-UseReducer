
import React, {useContext} from 'react';
//import { GlobalContext } from '../Context/GlobalState';
import { RemoveItem } from './RemoveItem';
import {Counter} from './Counter';
import { GlobalContext } from '../GlobalStates';
 
export const ShoppingList = () => {
   const { shoppingList } = useContext(GlobalContext);
 
   const shoppingMarkup = shoppingList.map((item, index) => (
      //  <li key = {index} className = 'list-item'> 
      //            {item.id} {item.name} {item.city} <RemoveItem item = {item} /> 
                 
      // </li>
      <li key = {index} className = 'list-item'> 
      {item}  <RemoveItem item = {item} /> 
      
</li>
   )) 

   return ( 
      <ul className = 'shopping-list'> 
         {shoppingMarkup} 
      </ul>
   )
}
