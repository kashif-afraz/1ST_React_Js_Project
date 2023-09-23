import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    
    // this is object store 3 states trick
    // const [userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:'',
    // })

    const titleChangeHandler = (event)=> {
        setEnteredTitle(event.target.value);
    }

    // const titleChangeHandler = (event)=> {
        // setUserInput({
        //     ...userInput,
        //     title: event.target.value,
        // })

        // setUserInput=((prevState)=>{ 
        //   return {...prevState, enteredTitle: event.target.value }  this is alternative of line 30 function
        // });
    // }
    
// this method is use to store previous states, as it handle title only remaining  keys of object will be set null thats why we use ...

    const amountChangeHandler = (event)=> {
      setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     title: event.target.value,
        // })
    }


    const dateChangeHandler = (event)=> {
      setEnteredDate(event.target.value);
    //   setUserInput({
    //     ...userInput,
    //     title: event.target.value,
    // })
    }

// Alternative way in which we create a single function which handle all of input tags
// const handler = (identifier, value)=>{
//     if(identifier ==='title'){
//       setEnetredTitle(value);
//     }
//     else if(identifier ==='date'){
//       setEnetredDate(value);

//     }
//     else {
//       setEnetredAmount(value);
//     }
// }
 const submitHandler = (event) => {
  event.preventDefault();
  const expenseData = {
    title: enteredTitle,
    amount: enteredAmount,
    date: new Date(enteredDate)
   };
   props.onSubmitExpenseData(expenseData);
   setEnteredTitle('');
   setEnteredAmount('');
   setEnteredDate('');
 };



  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* we can not set parameter when function is called, if we want a single function handle changes in 3 tags so then we need to enter arrow function then handler function with parameters */}
          {/* <input type="text" onChange={(event)=>titleChangeHandler('title', event.target.value)} /> */}
          
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" value={enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div>
        <button type="submit" className="new-expense__actions">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
