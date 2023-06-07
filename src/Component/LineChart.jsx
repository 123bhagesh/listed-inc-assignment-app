import React from "react";
import { Chart } from "react-charts";

export const LineChart = () => {
    const data = React.useMemo(
        () => [
          {
            label: "Series 1",
            data: [
                [120, 160],
                [140,390],
                [170, 330],
                [210, 280],
                [250, 410],
            ],
          },
          {
            label: "Series 2",
            data: [
              [100, 110],
              [130,380],
              [180, 230],
              [210, 280],
              [250, 410],
            ],
          },
        ],
        []
      );
    
      const axes = React.useMemo(
        () => [
          { primary: true, type: "time", position: "bottom" },
          { type: "linear", position: "left" },
        ],
        []
      );
  return (
    <div
      style={{
        width: "100%",
        height: "300px",
      }}
    >
      <Chart data={data} axes={axes} tooltip />
    </div>
  );
};
