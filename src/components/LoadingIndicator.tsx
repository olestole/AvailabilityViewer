import React from "react";

const LoadingIndicator = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold">Vi henter data...</h1>
      <p className="font-light">Takk for at du venter🥰</p>
    </div>
  );
};

export default LoadingIndicator;
