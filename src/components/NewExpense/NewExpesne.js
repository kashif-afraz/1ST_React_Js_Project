import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpesne = (props) => {
  const submitExpenseDataHandler =(enteredExpenseData)=>{
    const expenseData={
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  }
  return (
    <div className="new-expense">
        <ExpenseForm onSubmitExpenseData={submitExpenseDataHandler} />
    </div>
  )
}

export default NewExpesne;