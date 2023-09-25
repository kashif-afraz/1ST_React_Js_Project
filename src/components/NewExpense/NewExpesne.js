import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpesne = (props) => {
  
  const [isEditing, setIsEditing] = useState(false);

  const submitExpenseDataHandler =(enteredExpenseData)=>{
    const expenseData={
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

const startEditingHandler=() => {
  setIsEditing(true);
}

const stopEditingHandler=() => {
  setIsEditing(false);
}

  return (
    <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSubmitExpenseData={submitExpenseDataHandler} onStop={stopEditingHandler} />}
    </div>
  )
}

export default NewExpesne;