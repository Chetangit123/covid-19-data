// RechartsChart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const RechartsChart = ({ data }) => {
  const chartData = [
    { name: 'Recovered', value: parseInt(data.recovered) },
    { name: 'Confirmed', value: parseInt(data.confirmed) },
    { name: 'Deaths', value: parseInt(data.deaths) },
    { name: 'Active', value: parseInt(data.active) },
  ];

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <LineChart width={600} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#FF9933" /> {/* Change stroke color */}
      </LineChart>
    </div>
  );
};

export default RechartsChart;
