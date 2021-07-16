import React from "react";
import "./chart.css";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

function Chart() {
  const data = [
    {
      name: "Jan",
      activeuser: 4000,
    },
    {
      name: "Feb",
      activeuser: 3500,
    },
    {
      name: "Mar",
      activeuser: 3600,
    },
    {
      name: "April",
      activeuser: 2000,
    },
    {
      name: "May",
      activeuser: 2500,
    },
    {
      name: "June",
      activeuser: 3000,
    },
    {
      name: "July",
      activeuser: 3500,
    },
    {
      name: "Aug",
      activeuser: 3900,
    },
    {
      name: "Sept",
      activeuser: 4100,
    },
    {
      name: "Oct",
      activeuser: 4300,
    },
    {
      name: "Nov",
      activeuser: 4200,
    },
    {
      name: "Dec",
      activeuser: 4500,
    },
  ];

  return (
    <div className="chart">
      <h2 className="salesanalytics">User Analytics</h2>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#ce93d8" />
          <Line type="monotone" dataKey="activeuser" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
