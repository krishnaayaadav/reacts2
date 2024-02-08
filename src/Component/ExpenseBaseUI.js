
import ExpenseList from "./ExpenseLists";
import ExpenseForm from "./ExpenseForm";
import UpdateExpense from "./UpdateExpense";

import { useState } from "react";

export default function ExpenseBaseUI(){
    const [isUpdated,     setUpdated]     = useState(false);
    const [editdata,      setEdited]      = useState(undefined);

    return(
        
        <div className="container table-dark "> 
          <div className="row mt-5">

            <div className="col-sm-4 ">
                {
                  editdata == undefined ?
                    <ExpenseForm setUpdated = {setUpdated}   />
   
                   : <UpdateExpense  expenseData = {editdata} setUpdated={setUpdated} />
                }
               
            </div>

            <div className="col-sm-7 offset-1">
                <h3 className="offset-1">Existing  Expenses!</h3>
               
                  <ExpenseList statusChange = {isUpdated} setUpdated={setUpdated} setEdited={setEdited} />
                 
                

            </div>
 
          </div>
        </div>
        

    )
}