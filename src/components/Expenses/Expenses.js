import React, { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
 

  return (
    <li>
    <Card className="expenses">
      <ExpenseFilter onChangeFilter={filterChangeHandler} />

      <ExpensesChart expenses={filteredExpense} />

      <ExpensesList items={filteredExpense} />

      
      
{/*       
      code for conditional outputting content */}

      {/* {filteredExpense.length === 0? (<p>No data found for this year.</p>) : (filteredExpense.map((expense) => (
        <ExpenseItems
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))) } */}



      
      {/* this piece of code use to display date which is present in array.
      there is no condition if data is not available then what happened
      {filteredExpense.map((expense) => (
        <ExpenseItems
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}  */}
    
    
    
    
     {/* whout filter this code was working  */}
      {/* {props.item.map((expense) => (
        <ExpenseItems
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))} */}

{/* <-------------------------------------> */}


      {/* this method is use for static array value. */}
      {/* <ExpenseItems
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      />
      <ExpenseItems
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
      />
      <ExpenseItems
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
      />
      <ExpenseItems
        title={props.item[3].title}
        amount={props.item[3].amount}
        date={props.item[3].date}
      /> */}
    </Card>
    </li>
  );
};

export default Expenses;
