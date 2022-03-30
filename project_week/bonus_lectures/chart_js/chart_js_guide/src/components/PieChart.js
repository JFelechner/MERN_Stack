import React from 'react';
import {Pie } from "react-chartjs-2";

const PieChart = (props) => {
    return (
        <div>
            <h2>Pie Chart below</h2>
            <Pie data = {props.data}></Pie>
        </div>
    );
};


export default PieChart;