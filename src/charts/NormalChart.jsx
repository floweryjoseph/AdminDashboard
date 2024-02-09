import classes from '../modules/normalChart.module.scss'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function NormalChart({title, data, dataKey, grid}){
 
  return (
    <div className={classes.chart}>
     <h3 className="chartTitle">{title}</h3>
     <ResponsiveContainer width="100%" aspect={4 / 2}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd"/>
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
          <Tooltip/>
        {grid &&  <CartesianGrid stroke="#e0dfdf"  strokeDasharray="5 5"/>}
        </LineChart>
     </ResponsiveContainer>
    </div>
  )
}


