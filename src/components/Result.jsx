import React, { useEffect, useRef } from "react";
import { Pie } from "react-chartjs-2";
import { useFilePath } from "../context/filePathContext.jsx";
import "chart.js/auto";
import Card from "./Card.jsx";
const Result = () => {
  const chartRef = useRef(null);

  const { predictions } = useFilePath();
  useEffect(() => {
    if (!predictions) {
      window.location.href = "/";
    }
    if (chartRef && chartRef.current && chartRef.current.chartInstance) {
      chartRef.current.chartInstance.destroy();
    }
  }, [predictions]);
  // Assuming predictions is an object with disease names as keys and prediction scores as values
  console.log(predictions);
  let predArray = Object.entries(predictions).map(([disease, score]) => ({
    disease,
    score,
  }));
  predArray = predArray.slice(0, 3);
  const data = {
    labels: predArray.map(({ disease }) => disease),
    datasets: [
      {
        labels: predArray.map(({ disease }) => disease),
        data: predArray.map(({ score }) => score * 10),
        backgroundColor: ["#3ddbd9", "#8a3ffc", "#ee538b"],
        hoverOffset: 4,
      },
    ],
  };

  
  // if (data.datasets.length === 1) {
  //   let singleDataset = data.datasets[0];
  // }

  // const setTrue = false;
  // singleDataset ? setTrue = true: setTrue = false;
  return (
    <div className="container mt-28 mx-auto h-screen w-[1300px] bg-slate-200 flex flex-col rounded-3xl shadow-black shadow-2xl">
      <div className="flex flex-col lg:flex-row">
        {/* Prediction Results */}
        <div className="lg:w-1/2 p-8 ml-56 mt-24">
          <h1 className="text-4xl font-bold mb-12 [font-family:'Roboto',Helvetica]">
            Prediction Results
          </h1>
          {Object.keys(predictions)
            .filter((key) => predictions[key] > 6)
            .slice(0, 3) // Limiting to only three items
            .map((value, key) => (
              <Card
                className="ml-10 text-lg"
                key={key}
                label={value}
                index={key}
              />
            ))}
        </div>

        {/* Placeholder */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold mt-32">Prediction Graph</h1>
          <Pie data={data} ref={chartRef} className="mr-28" />
        </div>
      </div>
    </div>
  );
};

export default Result;
