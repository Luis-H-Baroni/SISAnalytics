import React from "react";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-moment";

function LineChart({ chartData }) {
  return (
    <div className="chart-container">
      <div style={{ width: "350px" }}>
        <Line
          data={chartData}
          options={{
            scales: {
              y: { beginAtZero: true, max: 100 },
            },
          }}
        />
      </div>
    </div>
  );
}
export default LineChart;
