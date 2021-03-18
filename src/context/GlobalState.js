
import React,{createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
//create initial state
const initialstate={
transactions:[
    
]
}
//createContext
export const GlobalContext=createContext(initialstate);
//provider
export const GlobalProvider=({children})=>{
   const [state, dispatch] = useReducer(AppReducer, initialstate)

   //action
   function deleteTransaction(id){
dispatch({
    type:'DELETE_TRANSACTION',
    payload:id
})
   }

   function addTransaction(transaction){
    dispatch({
        type:'ADD_TRANSACTION',
        payload:transaction
    })
       }
    return(
    <GlobalContext.Provider value={
        {
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
        }
    }>{children}
    </GlobalContext.Provider>
        )
    
}