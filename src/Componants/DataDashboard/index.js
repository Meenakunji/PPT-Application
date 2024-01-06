import React from "react";
import "./style.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registering components required by ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = ({ showContent }) => {
  // Your tabular data
  const tableData = {
    headers: [" ", "Q1-FY23", "Q2-FY23", "Q3-FY23", "Q4-FY23", "FY23"],
    rows: [
      { title: "Live ARR BOP", values: [47600, 48600, 49800, 50900, 47600] },
      { title: "New", values: [1100, 900, 1100, 900, 2400] },
      { title: "Expansion", values: [1500, 1400, 900, 1000, 4200] },
      { title: "Uplit", values: [800, 900, 900, 1400, 4100] },
      { title: "Prior Period Adj", values: [-400, -200, 0, 0, -600] },
      { title: "Churn", values: [-1100, -1100, -900, -600, -3700] },
      { title: "Downsell", values: [1200, 700, 1100, 1300, 4300] },
      { title: "Live ARR EOP", values: [4800, 4900, 50900, 53500, 53500] },
      { title: "CC", values: [2350, 2150, 2150, 2150, 2150] },
      {
        title: "OT Booking Annual Estimate",
        values: [7826, 7777, 7818, 8147, 8147],
      },
      {
        title: "ARR+CC+OT Bookings",
        values: [58776, 59727, 60868, 63797, 63797],
      },
      // Add additional rows as necessary
    ],
  };

  // Convert table data to chart data
  const chartData = {
    labels: tableData.headers,
    datasets: tableData.rows.map((row, index) => ({
      label: row.title,
      data: row.values,
      backgroundColor: `hsla(${index * 60}, 70%, 70%, 0.5)`, // Color will change for each dataset
      borderColor: `hsla(${index * 60}, 70%, 70%, 1)`,
      borderWidth: 1,
    })),
  };

  // Updated chart options for Chart.js v3
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart Title",
      },
    },
  };

  return (
    <div className="toolbar-container">
      <div className="toolbar-title">
        $0.3m ARR gap to close in Q3 in order to hit Q3 Board target
      </div>
      <div className="dashboard-container">
        {showContent ? (
          <table className="data-table">
            <thead>
              <tr>
                {tableData.headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.rows.map((row, index) => (
                <tr key={index}>
                  <td>{row.title}</td>
                  {row.values.map((value, valueIndex) => (
                    <td key={valueIndex}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
        {showContent ? (
          <div className="chart-container">
            <Bar data={chartData} options={chartOptions} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Dashboard;
