import React from 'react'

export const AppReducer2 = (state,action) => {
    console.log(state)
    switch(action.type){
        case "ADD-USER":
            return{
                ...state,
                users:[action.payload,...state.users]
            }
            case 'REMOVE_ITEM':
                return {
                //  ...state,
                   // array.splice(index, 1)
                   // users: [...users.splice(1)]
                  // users:  state.users.filter((item,index) => index !== action.payload.index) // ttrue for static items data
                  users:  state.users.filter((item) => item.id !== action.payload)
                // users:[!action.payload,...state.users]
                //   users: [state.users.splice(action.payload),...state.users]
                 //  users:[state.users.splice(!action.payload,1),...state.users]
                   // users: state.users.filter(item => item !== action.payload)
                }
            default:
                return state;
        }
    }
  

  
  
    
  

