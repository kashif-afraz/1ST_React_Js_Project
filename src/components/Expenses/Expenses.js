import React, { useState } from "react";
import './Expenses.css';
import ExpenseItems from "./ExpenseItems";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('');

  const filterChangeHandler = (selectedYear)=>{
    setFilteredYear(selectedYear);
  };

console.log(filteredYear);
  return (
    
    <Card className="expenses">
      <ExpenseFilter onChangeFilter = {filterChangeHandler}  />

      {props.item.map(expense =><ExpenseItems title={expense.title} amount={expense.amount} date={expense.date} />)};


      
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
  );
};

export default Expenses;
