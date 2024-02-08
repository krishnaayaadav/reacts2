import ExpenseItem from "./ExpenseItem";
import { useEffect, useState } from "react"; 

import { expenseListApiService } from '../ApiServices/ExpenseApiServices';

export default function ExpenseList(props){

    const [expenseList, setExpenseList] = useState([]);

    useEffect( ()=> {

        expenseListApiService().then( response => {

            // if valid response as status 200 ok response
            if(response.status == 200){
                // console.log(response.data);
                setExpenseList(response.data) 
                props.setUpdated(false);

            }
            
        }, (errors => {
            console.log(errors)
        })  )
    }, [expenseList.length, props.statusChange] )


    return(
        <table class="table table-hover text-white">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Amount</th>
                    <th scope="col">User</th>
                    <th scope="col">Date</th>
                    <th scope="col">Description</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>

            <tbody>

                 {
                    expenseList.map( expense => (
                        <ExpenseItem key={expense.pk} expense={expense} setUpdated={props.setUpdated} />
                    ) )
                }

            </tbody>
        </table>
    )
}