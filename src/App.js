

import { useContext ,useState} from 'react';
import './App.css';
import { AddItem } from './components/AddItem';
import { Counter } from './components/Counter';
import { ShoppingList } from './components/ShoppingList';
import { GlobalContext,GlobalProvider } from './GlobalStates';
function App() {
 const {adminUser,adminPassword}=  useContext(GlobalContext)
 //const [user,setUser]=useState(admin)
 


return (
   <div className="container"> 
 
   <h2>user name is:{adminUser},{adminPassword} </h2>
        {/* <Header />  */}
        <GlobalProvider> 
        <Counter/>
          <AddItem />
          
        
           {/* Components that will have access to the global state go here*/} 
           <ShoppingList />
           
        </GlobalProvider> 
       
        
       
  </div>

 );
}

export default App;
