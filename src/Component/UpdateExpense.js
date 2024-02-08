
import { useEffect, useState } from "react";
import { updateExpenseItemService } from '../ApiServices/ExpenseApiServices';

export default function UpdateExpense(props){

    let {pk, exp_title, exp_amount, exp_date, exp_user, exp_description } = props.expenseData;

    // console.log(exp_title, exp_amount, exp_date, exp_user, exp_description)
 
    const [title,  setTitle]  = useState(exp_title);
    const [amount, setAmount] = useState(exp_amount);
    const [user,   setUser]   = useState(exp_user);
    const [date,   setDate]   = useState(exp_date);
    const [desc,   setDesc]   = useState(exp_description);



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
        updateExpenseItemService(pk, expenseInputDate).then( response => {
            if(response.status == 200){
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

        <>
            <h3 className="offset-1">Update Expense!</h3>
           
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

                
                <button type="submit" className="btn btn-primary" onClick={submitHandler} >Update Expense</button>
            </form>
        </>
  
    )

}