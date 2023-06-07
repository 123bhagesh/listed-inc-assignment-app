import React from "react";
import { Pie } from "react-chartjs-2";
import Style from "./Style/PieChart.module.css";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  ArcElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  ArcElement,
  Tooltip
);
export const PieChart = () => {
  const pieData = [
    {
      title: "Basic Tees",
      percentage: "55%",
      color: "#98D89E",
    },
    {
      title: "Custom Short Pants",
      percentage: "31%",
      color: "#F6DC7D",
    },
    {
      title: "Super Hoodies",
      percentage: "14%",
      color: "#EE8484",
    },
  ];
  return (
    <div className={Style.pieContainer}>
      <div>
        <Pie
          data={{
            labels: ["Basic Tees", "custom Short Pants", "Super Hoodies"],
            datasets: [
              {
                label: "Data",
                backgroundColor: ["#98D89E", "#F6DC7D", "#EE8484"],
                data: [55, 31, 14],
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
      <div>
        {pieData.map((el, i) => (
          <div className={Style.pieDetail}>
            <div style={{background:el.color}}></div>
            <div>
              <h4>{el.title}</h4>
              <p>{el.percentage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
