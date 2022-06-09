import React from 'react'
// import { Bar } from 'react-chartjs-2'
import DataChart from './charts/DataChart'
import DataChartProduct from './charts/DataProducts'
import './StoreGraphes.css'
import {data} from '../admin/charts/someData'
// here need to play with the chart js and create a graph that showing different kind of data starting from amount of products per category and also statistic this I couldn't show on the industry need after to study next.js

function StoreGraphes() {
  return (
    <div>
      <div className='navbar'>
        <h3>גרפי מידע על תהליכים שונים בחנות</h3>
        <div>
          <label htmlFor="cars">Choose a category:  <select name="category" id="cars">
            {data.map(({ category }) => <option value={category}>{category}</option>)}
            {/* <option value="volvo">אביזרי אמבטיה</option>
            <option value="saab">אינסטלציה</option>
            <option value="mercedes">ברזים</option> */}
          </select></label>

        </div>
      </div>
      <DataChart />
      <DataChartProduct />
    </div>
  )
}

export default StoreGraphes