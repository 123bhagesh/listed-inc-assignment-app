import React, { useState } from "react";
import Chart from "react-apexcharts";

export const LineChart1 = () => {
  const [state, setState] = useState({
    options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["week-1", "week-2", "week-3", "week-4", "week-5"]
        }
      },
      series: [
        {
          name: "Guest",
          data: [110, 340, 185, 240, 390]
        },
        {
            name: "User",
            data: [130, 370, 145, 250, 349]
          }
      ]
    }
  );
  return (
    <div>
      {/* <Chart
        options={state.options}
        series={state.series}
        type="bar"
        width="500"
      />
       <Chart
        options={state.options}
        series={state.series}
        type="pie"
        width="500"
      /> */}
             <Chart
        options={state.options}
        series={state.series}
        type="area"
        width="100%"
        height="350px"
        fill='false'
      />
    </div>
  );
};
