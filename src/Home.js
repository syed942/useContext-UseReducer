import React, { useContext,useEffect } from 'react'
import { Context, UseGlobalContext } from './Context'

export const Home = () => {
   const [UpdateHomePage]  =    UseGlobalContext()
   console.log(UpdateHomePage)
     useEffect(()=>{
        UpdateHomePage()

     },[])
  return (
    <div>Home</div>
  )
}
