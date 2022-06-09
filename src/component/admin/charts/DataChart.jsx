import React, { useState } from 'react'
// import { Line, Pie } from 'react-chartjs-2';
import BarChart from './BarChart'
import './DataChart.css'
import LineChart from './LineChart';
import PieChart from './PieChart';
import { data } from './someData';
function DataChart() {
  // to do here provider for the userData that this component will duplicate couple of time with diffrent data
  //,setUserData
  const [userData] = useState({
    labels: data.map((data) => data.category),
    datasets: [{
      label: 'כמות מוצרים לפי קטוגריה',
      data: data.map((data) => data.totalAmountProducts),
      backgroundColor: ["blue", 'yellow', 'green', 'purple', 'brown'],
      borderColor: 'black',
      borderWidth: 2,
    }]
  });

  return (
    <>
      <div className='bar-chart-container'>
        <BarChart chartData={userData} />
      </div>
      <div className='line-chart-container'>
        <LineChart chartData={userData} />
      </div>
      <div className='pie-chart-container'>
        <PieChart chartData={userData} />
      </div>
    </>
  )
}

export default DataChart