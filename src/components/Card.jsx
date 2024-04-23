import React from "react";

const Card = ({ label, index }) => {
  const colors = ["bg-[#3ddbd9]", "bg-[#8a3ffc]", "bg-[#ee538b]"]; // Define colors here
  
  // Get the color based on the index
  const color = colors[index % colors.length];
  
  return (
    <div className={`flex items-center justify-center flex-col text-center h-24  rounded-lg text-white cursor-pointer transition-transform;
  } flex flex-col gap-4 mt-6 ${color}`}>
      <div className="card">
        <p className="tip">{label}</p>
        <p className="second-text">{label}</p>
      </div>
    </div>
  );
};

export default Card;
