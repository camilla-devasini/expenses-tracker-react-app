import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredData] = useState('2020');
  
  const saveDropdownDataHandler = (dropChoice) => {
    console.log(dropChoice);
    setFilteredData(dropChoice);
  //  setFilteredData((previousState) => {
  //    return (previousState, choicedata);
  //  })

  };

  const filteredExpenses = props.items.filter((expense) => {
   return expense.date.getFullYear().toString() === filteredYear;  // this returns true or false //filter returns a new array (the original is not touched)
  });
  
    return (
      <div>
        <Card className="expenses">
        <ExpensesFilter 
          selected={filteredYear}
          onSaveDropdownData={saveDropdownDataHandler}/> 
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
        
        </Card>
      </div>
    )
}

export default Expenses;