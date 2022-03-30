import React from "react";
import MixedChart from "./MixedChart";
import Chart from 'chart.js/auto'
// import RadarChart from "./RadarChart";
import PieChart from "./PieChart";
import { Pie } from "react-chartjs-2";

//Example of 3 different data sets 
const data1 = [3, 1, 5, 8, 20, 10, 15, 30, 12, 100];

const data2 = [2, 3, 10, 5, 5, 9, 10, 10, 30, 50];
// const total = data1.map((num, idx) => num + data2[idx]);
//Inside data props
const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    datasets: [
        {
            label: "Data1",
            data: data1,
            backgroundColor: "rgba(87, 121, 234, 0.6)",
            borderColor: "rgba(87, 121, 234, 0.6)",
            order: 1,
        }
    ],
};

const piedata = {
    labels: [
        'Groceries',
        'Housing + Utilities',
        'Investments',
        'Travel'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100, 50],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'green'
        ],
        hoverOffset: 100
    }]
};

export default function Main() {
    //You can make API call to get the necessary data here
    //and pass as props to relevant chart component
    return (
        <div>
            <MixedChart data={data} />
            <PieChart data={piedata}></PieChart>
            {/* <RadarChart data = {data} />
      <PieChart data = {data} /> ... etc */}
        </div>
    );
}