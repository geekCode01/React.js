import './ExpenseItem.css';

//In this we dont need to pass data in <div> as a hard coded text, we make some const values and assign it to variables 
// and pass values into <div> in the format of {expenseValue}
function ExpenseItem(props){
    return (
        <div className='expense-item'>
            <div>{props.date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;