import react from 'react';
export const TransactionHistory =()=>{
    return(
        <div> 
            <h3>Transaction History</h3>
           <ul className="list">
               <li className="plus">
                   project 1 income<span>$100</span>
                   <button className="delete-btn">x</button>
               </li>
               <li className="minus">
               project 1 salary<span>$50</span>
               <button className="delete-btn">x</button>
               </li>
           </ul>
            </div>
       
    )
}