
import ExpenseList from "./ExpenseLists";
import ExpenseForm from "./ExpenseForm";

export default function ExpenseBaseUI(){

    return(
        
        <div className="container table-dark "> 
          <div className="row mt-5">

            <div className="col-sm-4 ">
                <h3 className="offset-1">Add New Expense!</h3>
                <ExpenseForm />

            </div>

            <div className="col-sm-7 offset-1">
                <h3 className="offset-1">Existing  Expenses!</h3>
                <ExpenseList />

            </div>

          </div>
        </div>
        

    )
}