//state is used when you want to update data and you want that it will reflect on UI that time
//we use state

import React,{useState} from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';



function ExpenseItem(props)
{
    const [title,setTitle]=useState(props.title);

    const clickHandler=()=>
    {
        setTitle('Updated!!');
        console.log(title);
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;