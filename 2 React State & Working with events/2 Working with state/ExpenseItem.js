//in this we work with useState() which is used to update value 
//if we want to update value of title 
// like title='update' it will not reflect in localhost it only works in console
//for reflecting in react we have to use useState() because it not only re value to variable but 
// also re initialize value and again run component that we want bcz only 
//title='updated' not run component again 

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