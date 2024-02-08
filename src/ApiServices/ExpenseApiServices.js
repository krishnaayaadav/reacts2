import axios from 'axios';

// axios instance here
const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    timeout: 300,
    headers: {
        'Content-Type': 'application/json',
    }
})

// ExpenseList API Services

function expenseListApiService(){
    return axiosInstance.get('/expense/api/expense/')
}

export {
    expenseListApiService, // expense list api services
}