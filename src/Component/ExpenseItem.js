
import { deleteExpenseItemService } from '../ApiServices/ExpenseApiServices';

export default function ExpenseItem(props){
    // console.log(props.expense);
    const expense = props.expense;
    
    // expense delete handler
    const deleteHandler = () => {
        deleteExpenseItemService(expense.pk).then( response => {

            if(response.status == 204){
                props.setUpdated(true);
                console.log('Expense is delete successfully')
            }
        }, (errors) => {
            console.log(errors)
        } )

    }

    // update data caller
    const updateExpenseCaller = ()=> {
        // console.log('Update date is called', expense)
        props.setEdited(expense); // updating the data
        // console.log(props.setEdited)
    }


    return(
                <tr className="text-white">
                    <th scope="row">{expense.pk}  </th> 
                    <td> {expense.exp_title}  </td>
                    <td> {expense.exp_amount} </td>
                    <td> {expense.exp_user}   </td>
                    <td> {expense.exp_date}   </td>
                    <td> {expense.exp_description} </td>
                    <td>
                        <span>
                            <button className="btn btn-outline-primary" onClick={updateExpenseCaller}  >Edit</button>  <br></br>
                            <button className="btn btn-outline-danger" onClick={deleteHandler}  >Delete </button>
                        </span>
                    </td>


                </tr>
    )

}