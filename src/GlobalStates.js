import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
const data=[{id:1,name:"asad",city:"lahore"},{id:2,name:"asad shsh",city:"lahore"}]
const initialState = {
    //  shoppingList : [{id:1,name:"asad",city:"lahore"},{id:2,name:"asad shsh",city:"lahore"}],
      shoppingList : [],
      adminUser:"ishfaqadmin",
      adminPassword:"admin123",
      counter:33
   }
   export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
   const [state, dispatch] = useReducer(AppReducer, initialState);
   console.log(state.shoppingList)

   // Actions for changing state

   function addItemToList(item) {
       dispatch({
           type: 'ADD_ITEM',
           payload: item
       });
   }
  

   function removeItemFromList(item) {
       dispatch({
           type: 'REMOVE_ITEM',
           payload: item
       });
   }
   function handleInc(){
    dispatch({type: 'increment'});
   }
   function handleDec(){
    dispatch({type: 'decrement'});
   }
   
   

   return(
      <GlobalContext.Provider value = {{shoppingList : state.shoppingList,handleInc,handleDec,counter:state.counter,
       addItemToList, removeItemFromList}}> 
        {children} 
   </GlobalContext.Provider>
   )
}
