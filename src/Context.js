import React, { createContext, useContext, useReducer } from 'react'
import { Reducer } from './Reducer'
const AppContext = createContext()
const initialState = {
    name: "",
    image: ""
}

 const Context = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState)
    const UpdateHomePage=()=>{
        return dispatch(
            {
                type:"UPDATE_HOME",
                payload:{
                    name:"syed ishfaq hussain shah",
                    image:"./images/pic.jpg"
                }
            }
        )
    }
    const UpdateAboutPage=()=>{
        return dispatch(
            {
                type:"UPDATE_ABOUT",
                payload:{
                    name:"syed ishfaq hussain shah",
                    image:"./images/pic.jpg"
                }
            }
        )
    }
    return (
        <AppContext.Provider value={{...state,UpdateHomePage,UpdateAboutPage}}>
            {children}
        </AppContext.Provider>
    )
}
const UseGlobalContext=()=>{
    return useContext(AppContext)
}
export {Context,UseGlobalContext}
