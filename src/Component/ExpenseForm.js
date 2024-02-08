
import { useEffect, useState } from "react";
import { addExpenseItemService } from '../ApiServices/ExpenseApiServices';

export default function ExpenseForm(props){

 
    const [title,   setTitle] = useState('');
    const [amount, setAmount] = useState();
    const [user,   setUser]   = useState('');
    const [date,   setDate]   = useState();
    const [desc,   setDesc]   = useState();



    const submitHandler = (e) => {

        e.preventDefault(); // preventing default behavior of form like page reloading after submitting a form

        // expense user input data from form
        const expenseInputDate = {
                exp_amount: amount,
                exp_title: title,
                exp_user:  user,
                exp_date:  date,
                exp_description: desc
        }  


        // here we make request to server to store data in db using api
        addExpenseItemService(expenseInputDate).then( response => {
            if(response.status == 201){
                console.log(response.data, '\n Data inserted successfully')
                props.setUpdated(true); // changing updation state
            }
        },

        // if getting some errors
        (errors) => {
            console.log(errors)
        } 
        
        )


    }


    return(
        <form onSubmit={submitHandler}>

            <div className="mb-3">
                <label className="form-label">Expense Title</label>
                <input type="text" className="form-control" value={title} onChange={ (e) => { setTitle(e.target.value) } }  />
                <div className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
                <label className="form-label">Expense Amount</label>
                <input type="text" className="form-control" value={amount} onChange={ (e) => { setAmount(e.target.value) } }  />
            </div>

            <div className="mb-3">
                <label className="form-label">Expense User</label>
                <input type="text" className="form-control" value={user} onChange={ (e) => { setUser(e.target.value) } }  />
            </div>

            <div className="mb-3">
                <label className="form-label">Expense Date</label>
                <input type="date" className="form-control" value={date} onChange={ (e) => { setDate(e.target.value) } }  />
                <div className="form-text">Select Expense Date.</div>
            </div>

            <div className="mb-3">
                <label className="form-label">Expense Description</label>
                <textarea className="form-control" value={desc} onChange={ (e) => { setDesc(e.target.value) } }  />
                <div className="form-text">Select Expense Date.</div>
            </div>

            
            <button type="submit" className="btn btn-primary" onClick={submitHandler} >Submit</button>
      </form>
  
    )

}