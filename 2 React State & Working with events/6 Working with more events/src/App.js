//import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
//In this we can pass data using props like here
//we make const expenses in App and gives values in json format
// and add into <expense> with its title,date,amount and pass props as a argument in 
//ExpenseItem and assign values as {props.title} and so on.....

function App() {
  const expenses=[
      {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
      },
      { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
      {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
      },
      {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
      },
  ];

  const addExpenseHandler =(expense)=>{
      console.log('In App.js');
      console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
