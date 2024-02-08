
import ExpenseList from "./ExpenseLists";
import ExpenseForm from "./ExpenseForm";

import { useState } from "react";

export default function ExpenseBaseUI(){
    const [isUpdated,   setUpdated]     = useState(false);

    return(
        
        <div className="container table-dark "> 
          <div className="row mt-5">

            <div className="col-sm-4 ">
                <h3 className="offset-1">Add New Expense!</h3>
                <ExpenseForm setUpdated = {setUpdated}/>

            </div>

            <div className="col-sm-7 offset-1">
                <h3 className="offset-1">Existing  Expenses!</h3>
                <ExpenseList statusChange = {isUpdated} setUpdated={setUpdated} />

            </div>
 
          </div>
        </div>
        

    )
}