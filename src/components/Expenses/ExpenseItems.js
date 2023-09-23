import React from "react";
import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItems = (props) => {
   
    // const [title, setTitle] = useState(props.title);

    // const handler = () => {
    //   console.log("Clicked!!")
    //   setTitle("updated");
    // }

  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price"> {props.amount}Rs </div>
      </div>
      {/* <button onClick={handler}>title change button</button> */}
    </Card>
  );
};

export default ExpenseItems;
