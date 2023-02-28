export default (state, action) => {
    console.log("pay load",action.payload)
  console.log("remove",state.shoppingList.filter(item => item !== action.payload))// filter items not to be deleted
  //action.pay load containes item to be deleted
   switch(action.type) {
       case 'ADD_ITEM':
           return {
                  shoppingList: [action.payload, ...state.shoppingList]
              // shoppingList:   [{...state.shoppingList,action.payload}]
           }
           case 'increment':
            return {
                ...state,
                counter: state.counter + 1
            }
            case 'decrement':
                return {
                    ...state,
                    counter: state.counter - 1
                }

       case 'REMOVE_ITEM':
           return {
               shoppingList: state.shoppingList.filter(item => item !== action.payload)
           }
       default:
           return state;
   }
}