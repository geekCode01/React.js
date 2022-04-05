import './ExpenseItem.css';

//In this we dont need to pass data in <div> as a hard coded text, we make some const values and assign it to variables 
// and pass values into <div> in the format of {expenseValue}
function ExpenseItem(){
    
    const expenseDate=new Date(2022,4,5);
    const expenseTitle='Car Insurance';
    const expenseAmount=294.67;

    return (
        <div className='expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;