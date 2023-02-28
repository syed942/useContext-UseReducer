import React, { useContext, useState } from 'react'
import { GlobalContext } from '../GlobalStates2'

export const ViewUsers = () => {
    const {users,AddUser, removeItemFromList}=    useContext(GlobalContext)
    console.log(users)
    // const [user,setUser] =   useState({
    //             name:"ali",
    //             city:"lahore",
    //             image:"./images/pic.jpg"
    //            })
   
               const [user,setUser] =   useState({
                id:0,
                name:"ali",
                city:"lahore",
                image:"./images/pic.jpg"
               })

const Submit=(e)=>{
    e.preventDefault()
    AddUser(user)
}
const Remove=(id)=>{
  //  e.preventDefault()
    removeItemFromList(id)
}
const HandleChange=(e)=>{
  setUser({
    ...user,[e.target.name]:e.target.value
  })

}
  return (
    <div>ViewUsers
        <form onSubmit={Submit}>
        <label>ID:</label>
          <input type="number"
          name="id"
          value={user.id} onChange={HandleChange}/>
          <label>Name:</label>
          <input type="text"
          name="name"
          value={user.name} onChange={HandleChange}/>
          <label>
            City
          </label>
          <input type="text" 
          name="city"
          onChange={HandleChange}
          value={user.city}/>
          <label>
            picture
          </label>
          <input type="text"
          name="image"
          onChange={HandleChange}
          value={user.image}/>
<button>Add</button>
        </form>
      
       
        <div>
            {users?.map((item,index)=>{
                return(<div key={index}>
                    <p>{item.name}{index} ID:{item.id} City:{item.city}
                    <img src={item.image} alt="kk" width="100px" height="100px"/>
                    </p>
                    <button onClick={(e)=>Remove(item.id)}>ndexRemove</button>
                    </div>)
            })}
           
        </div>

       
    </div>
  )
}
