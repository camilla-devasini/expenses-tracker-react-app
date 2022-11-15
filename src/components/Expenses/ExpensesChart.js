import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
    const chartDataPoints = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},
    ];
//props.expenses > we will define expenses as filterdExpenses = expenses per year
// from filteredexpenses each year, select the expense amount and add to the chart to that month
    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth(); //mese nell'expenses object
        chartDataPoints[expenseMonth].value += expense.amount; // mese usato anche come index nel chart per assciare l'amouunt da sommare al valore iniziale = 0;
    }

    return <Chart dataPoints={chartDataPoints} /> // finally the parent defines what are the datapoints for the
    //child Chart ? they are the chart
};

export default ExpensesChart;