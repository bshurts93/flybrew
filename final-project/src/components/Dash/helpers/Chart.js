import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Label,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import Title from "./Title";

// Generate Sales Data
function createData(beers, amount) {
  return { beers, amount };
}

// const data = [
//   createData("Sunday", 3),
//   createData("Monday", 4),
//   createData("Tuesday", 2),
//   createData("Wednesday", 4),
//   createData("Thursday", 2),
//   createData("Friday", 3),
//   createData("Saturday", 4),
//   createData("Sunday", 2)
// ];

const data = [
  {
    name: "Sunday",
    Brews: 2,
    amt: 2400
  },
  {
    name: "Monday",
    Brews: 3,
    amt: 2210
  },
  {
    name: "Tuedsday",

    Brews: 5,
    amt: 2290
  },
  {
    name: "Wednesday",
    Brews: 3,
    amt: 2000
  },
  {
    name: "Thursday",
    Brews: 4,
    amt: 2181
  },
  {
    name: "Friday",
    Brews: 1,
    amt: 2500
  },
  {
    name: "Saturday",
    Brews: 5,
    amt: 2100
  }
];

export default function Chart() {
  return (
    <React.Fragment>
      <Title>Your Week</Title>
      <ResponsiveContainer>
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Brews" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
