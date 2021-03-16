
import React,{createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
//create initial state
const initialstate={
transactions:[
    {id:1,description:"income 1",transactionAmount:1000},
    {id:2,description:"Expense 1",transactionAmount:-500},
    {id:3,description:"income 2",transactionAmount:2000},
    {id:4,description:"Expense 2",transactionAmount:-100}
]
}
//createContext
export const GlobalContext=createContext(initialstate);
//provider
export const GlobalProvider=({children})=>{
   const [state, dispatch] = useReducer(AppReducer, initialstate)
    return(
    <GlobalContext.Provider value={
        {
        transactions:state.transactions
        }
    }>{children}
    </GlobalContext.Provider>
        )
    
}