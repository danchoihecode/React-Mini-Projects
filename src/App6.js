import { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import DataTable from './App6.1';
import { Button } from 'react-bootstrap';
import "./App6.css"

ChartJS.register(
  CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'X',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Y',
      },
    },
  },
};

export default function App() {

  const [data, setData] = useState([]);
  const [maxX, setMaxX] = useState(0);

  const chartData = {
    labels: data.map(item => item.x),
    datasets: [
      {
        label: 'Y',
        data: data.map(item => item.y),
        backgroundColor: '#215fae',
      },
    ],
  };

  function getMaxX() {
    let x = maxX + 1;
    setMaxX(x);
    return x;
  }

  function handleAdd() {

    let newData = [...data,
    { x: getMaxX(), y: 0 }
    ]
    setData(newData);
  }

  function handleDelete() {
    if (maxX > 0) {
      let newMaxX = maxX - 1;
      let x = data[newMaxX].x;
      let newData = data.filter((c) => { return c.x !== x });
      setData(newData);
      setMaxX(newMaxX);
    }

  }

  return (
    <div className="container-2">
      <div className="data-table">
        < DataTable data={data} setData={setData} />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Button style={{ marginBottom: "20px" }}
          variant="success" onClick={handleAdd}>Add</Button>
        <Button variant="danger" onClick={handleDelete}>Delete</Button>
      </div>
      <div className="chart">
        <Bar options={options} data={chartData} />
      </div>
    </div>
  );
};


