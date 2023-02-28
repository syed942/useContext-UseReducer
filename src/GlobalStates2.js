
import { type } from '@testing-library/user-event/dist/type';
import React, { createContext, useReducer } from 'react'
import { AppReducer2 } from './AppReducer2';


const initialState={
    users:[]
   
}



   export const GlobalContext =    createContext(initialState);

   export const GlobalProvider= ({children})=>{
    const [state,dispatch]= useReducer(AppReducer2,initialState)

    // const AddUser=(item)=>{
    //     dispatch({
    //         type:"Add-User",
    //         payload:item

    //     })
    function AddUser(item){
dispatch({
    type:"ADD-USER",
    payload:item
})
    }
    // below code true for static items data
    // function removeItemFromList(index) {
    //     dispatch({
    //         type: 'REMOVE_ITEM',
    //         payload: index
    //     });
    // }
    function removeItemFromList(id) {
        dispatch({
            type: 'REMOVE_ITEM',
            payload: id
        });
    }
        return(
            <GlobalContext.Provider value={{
                AddUser,
                removeItemFromList,
                users:state.users,
                
            }}
                >{children}
                    
                
                </GlobalContext.Provider>

            
        )
        


    }


   

