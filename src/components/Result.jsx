import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { useFilePath } from '../context/filePathContext.jsx';
const Result = () => {
    const { predictions } = useFilePath();  
    useEffect(() => {
        if (!predictions) {
            window.location.href = '/';
        }
    }, [predictions]);
    // Assuming predictions is an object with disease names as keys and prediction scores as values
    
    return (
        <div className="container mx-auto mt-10">
            <div>
                <h1 className="text-2xl font-bold">Prediction Results</h1>
                {Object.keys(predictions).filter((key)=>predictions[key]>6).map((key)=>( <div key={key}>{key}</div>))}

            </div>
            {/* <Bar data={data} /> */}
        </div>
    );
    }
export default Result;