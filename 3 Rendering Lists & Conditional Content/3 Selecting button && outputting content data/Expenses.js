import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";

//in this we are filtering expenses of selected year and if there is no expense at 
//selected year then print the msg
//on the screen

function Expenses(props)
{
    const[filteredYear,setFilteredYear] = useState('2020');
    const filterChangeHandler =(selectedYear)=>{
        setFilteredYear(selectedYear);
    };

    //selecting year wiht this function

    const filteredExpenses = props.items.filter(expense =>{
        return expense.date.getFullYear().toString()===filteredYear;
    });

    //outputting conditional content by checking if selected year has length>0
    //then print or show its data 
    //otherwise show conditional data on the screen
    
    let expensesContent = <p>oops! No expenses found :( </p>;

    if(filteredExpenses.length>0)
    {
        expensesContent=filteredExpenses.map((expense)=>(
            <ExpenseItem 
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ));
    }

    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>

                {expensesContent}

            </Card>
        </div>
    );
}

export default Expenses;