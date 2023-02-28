export const AppReducer1= (state, action) => {
    console.log("pay load",action.payload)
  //console.log("remove",state.shoppingList.filter(item => item !== action.payload))// filter items not to be deleted
  //action.pay load containes item to be deleted
   switch(action.type) {
       case 'ADD_ITEM':
           return {
            ...state,
            name:action.payload.name,
            image:action.payload.image
                //  shoppingList: [action.payload, ...state.shoppingList]
              // shoppingList:   [{...state.shoppingList,action.payload}]
           }
    
       default:
           return state;
   }
}