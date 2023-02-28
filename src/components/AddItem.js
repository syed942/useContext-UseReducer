
import React, {useState, useContext} from 'react';
import { GlobalContext } from '../GlobalStates';
//import {GlobalContext} from '../Context/GlobalState';
 
export const AddItem = () => {
   const [text, updateText] = useState('');
   const { addItemToList } = useContext(GlobalContext);
 //const [user,setUser]= useState([{id:3,name:"umer",city:"multan"}])
   const handleSubmit = (event) => {
    // const user= {
    //     id:5,
    //     name:"aamir",
    //     city:"fsd"
    // }
       if (text.length){
          event.preventDefault();
           addItemToList(text);
           updateText('')
       }
   }
 
   const handleChange = (event) => {
       updateText(event.target.value)
   }
 const submit=(e)=>{
    e.preventDefault()
    const user= {
        id:5,
        name:"aamir",
        city:"fsd"
    }
    addItemToList({user});
 }
   return (
     <div> 
        {/* <button onClick={submit}>add record</button> */}
         <h3>Add a new item to the shopping list</h3> 
         <form onSubmit = {handleSubmit}> 
            <div className = 'form-control'> 
               <input type="text" value={text} onChange={handleChange} placeholder="Enter item..." /> 
            </div> 
            <button className = 'btn'>Add Item</button> 
         </form> 
      </div>
   )
}