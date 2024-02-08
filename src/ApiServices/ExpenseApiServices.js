import axios from 'axios';

const siteURL = 'http://127.0.0.1:8000';

// axios instance here
const axiosInstance = axios.create({
    baseURL: siteURL,
    timeout: 300,
    headers: {
        'Content-Type': 'application/json',
    }
})

// ExpenseList  Services
function expenseListApiService(){
    return axiosInstance.get('/expense/api/expense/')
}


// Add New Expense Item  Services
function addExpenseItemService(expenseInputData){ 
    const postURL = 'http://127.0.0.1:8000/expense/api/expense/add/';
    // console.log(expenseInputData) 
    
    return axios.post(postURL,{...expenseInputData})
} 


// Add New Expense Item  Services
function deleteExpenseItemService(expenseId){ 
    const postURL = 'http://127.0.0.1:8000/expense/api/expense/delete/'+expenseId + '/';
    return axios.delete(postURL)
} 


// Update Expense Item  Services
function updateExpenseItemService(expenseId, expData){ 
    const postURL = 'http://127.0.0.1:8000/expense/api/expense/update/'+expenseId + '/';
    return axios.patch(postURL, {...expData})
} 

export {
    expenseListApiService,       // expense list api services
    addExpenseItemService,      // expense post api services
    deleteExpenseItemService,  // delete expense api service
    updateExpenseItemService, // update expense api service
}