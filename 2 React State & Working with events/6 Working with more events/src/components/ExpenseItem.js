//state is used when you want to update data and you want that it will reflect on UI that time
//we use state

import React from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';



function ExpenseItem(props)
{
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;