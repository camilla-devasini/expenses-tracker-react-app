import './Chart.css';
import ChartBar from './ChartBar';

const Chart = props => {
    // dataPoints will be the chart of month - value
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value); // the map returns an array
    const totalMaximum = Math.max(...dataPointValues); // Math.max does not accept an array, so we spread the values
    return (
        <div className='chart'>
          {props.dataPoints.map((dataPoint) => (
            <ChartBar
              key={dataPoint.label}
              value={dataPoint.value}
              maxValue={totalMaximum}
              label={dataPoint.label}
            />
          ))}
        </div>
      );
}
export default Chart;