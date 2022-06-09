import React, { useState } from 'react'
// import { Line, Pie } from 'react-chartjs-2';
import BarChart from './BarChart'
import LineChart from './LineChart';
import PieChart from './PieChart';
import { data } from './someData';
import './DataProducts.css'

function DataChartProduct() {
  // to do here provider for the userData that this component will duplicate couple of time with diffrent data
  //,setUserData
  const [userData] = useState({
    labels: data.map((data) => data.category),
    datasets: [{
      label: 'כמות מוצרים שונים לפי קטוגריה',
      data: data.map((data) => data.productsPerCategort),
      backgroundColor: ["blue", 'yellow', 'green', 'purple', 'brown', 'silver', 'gray', 'fuchsia'],
      borderColor: 'black',
      borderWidth: 2,
    }]
  });
  const [userDataNetWorth] = useState({
    labels: data.map((data) => data.category),
    datasets: [{
      label: 'עלות כוללת מוצרים',
      data: data.map((data) => data.netWorthStore),
      backgroundColor: ["blue", 'yellow', 'green', 'purple', 'brown', 'silver', 'gray', 'fuchsia'],
      borderColor: 'black',
      borderWidth: 2,
    }]
  });

  return (
    <>
      <div className='bar-chart-container-product'>
        <BarChart chartData={userData} />
      </div>
      <div className='pies-container'>
        <div className='pie-chart-container-product'>
          <PieChart chartData={userData} />
        </div>
        <div className='pie-chart-container-product'>
          <PieChart chartData={userDataNetWorth} />
        </div>
      </div>
      <div className='line-chart-container-product'>
        <LineChart chartData={userData} />
      </div>
    </>
  )
}

export default DataChartProduct