

import { useContext ,useState} from 'react';
import './App.css';
import { AddItem1 } from './components/AddItem1';
import { ViewState } from './components/ViewState';
//import { Counter } from './components/Counter';
//import { ShoppingList } from './components/ShoppingList';
import { GlobalContext,GlobalProvider } from './GlobalStates1';
function App1() {
 const {name}=  useContext(GlobalContext)
 //const [user,setUser]=useState(admin)
 


return (
   <div className="container"> 
 
  
        {/* <Header />  */}
        <GlobalProvider> 
        {/* <Counter/> */}
          <AddItem1 />
          <ViewState />
        
           
           
        </GlobalProvider> 
       
        
       
  </div>

 );
}

export default App1;
