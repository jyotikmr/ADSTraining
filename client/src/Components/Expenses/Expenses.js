import ExpenseItem from "./ExpenseItem.js";
import './Expenses.css';

function Expenses(props) {
    return (

        <div className="expenses">
            <ExpenseItem title={props.title} amount={props.amount} date={props.date} />

            <ExpenseItem title={props.title} amount={props.amount} date={props.date} />

            <ExpenseItem title={props.title} amount={props.amount} date={props.date} />

            <ExpenseItem title={props.title} amount={props.amount} date={props.date} />

        </div>

    )

}



export default Expenses