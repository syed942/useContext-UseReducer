import React, { useContext } from 'react'
//import {GlobalProvider}  from '../GlobalStates2'
import { ViewUsers } from './components/ViewUsers'
import { GlobalProvider ,GlobalContext} from './GlobalStates2'
export const App2 = () => {
        
  return (
    <div>
        <GlobalProvider>
        <ViewUsers/>
        </GlobalProvider>
       
    </div>
  )
}
