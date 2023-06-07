import React, { useState } from "react";
import Chart from "react-apexcharts";

export const PieChart = () => {
    const [state, setState] = useState({
    options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["week-1", "week-2", "week-3", "week-4", "week-5"]
        }
      },
      series: [130, 370, 145, 250, 349]
    
    }
  )
  return (
    <div>
       <Chart
        options={state.options}
        series={state.series}
        type="pie"
        width="400"
      /> 
    </div>
  )
}
