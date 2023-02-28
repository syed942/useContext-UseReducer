import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import {AppReducer1} from './AppReducer1';
const data=[{id:1,name:"asad",city:"lahore"},{id:2,name:"asad shsh",city:"lahore"}]
const initialState = {
    //  shoppingList : [{id:1,name:"asad",city:"lahore"},{id:2,name:"asad shsh",city:"lahore"}],
    ///  shoppingList : [],
    //  adminUser:"ishfaqadmin",
    //  adminPassword:"admin123",
    //  counter:33,
      name:"",
      image:""
   }
   export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
   const [state, dispatch] = useReducer(AppReducer1, initialState);
   console.log(state.name)

   // Actions for changing state

   function addItemToList() {
       dispatch({
           type: 'ADD_ITEM',
           payload: {
            name:"asim",
            image:"./images/pic.jpg"
           }
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
      <GlobalContext.Provider value = {{
        name:state.name,
        image:state.image,
        // shoppingList : state.shoppingList,handleInc,handleDec,counter:state.counter,
       addItemToList}}> 
        {children} 
   </GlobalContext.Provider>
   )
}
