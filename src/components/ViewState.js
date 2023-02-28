import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalStates1'

export const ViewState = () => {
   const {name,image}=  useContext(GlobalContext)
  return (
    <div>
       <h2> {name}</h2>
       
       <img src={image} alt="kk" height="100px" width="100px"/>
    </div>
  )
}
