

export default function ExpenseForm(){

    return(
        <form>
            <div className="mb-3">
                <label className="form-label">Expense Title</label>
                <input type="text" className="form-control" />
                <div className="form-text">We'll never share your email with anyone else.</div>
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
      </form>
  
    )

}