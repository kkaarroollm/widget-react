import React, { useEffect, useState } from "react";

function InfoDataCoin({ apiUrl }) {
  const [soldValue, setSoldValue] = useState(null);
  const [raisedValue, setRaisedValue] = useState(null);
  const [raisedGoal, setRaisedGoal] = useState(35000)
  const [soldGoal, setSoldGoal] = useState(3500)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setSoldValue(data.bpi.GBP.rate_float);
        setRaisedValue(data.bpi.EUR.rate_float);
        setRaisedGoal(data.bpi.USD.rate_float);
        setSoldGoal(data.bpi.USD.rate_float);
      } catch (error) {
        //console.log(error);
      }
    }

    fetchData();
  }, [apiUrl]);


  const soldPercentage = (soldValue / soldGoal) * 100;
  const progressWidth = `${Math.min(soldPercentage, 100)}`;

  return (
    <div id="info-data">
      <div className="progress-bar">
        <div className="progress-bar-done" style={{ width: `${progressWidth}%` }}></div>
      </div>
      <div className="amount">
        <p className="sold">
          <span className="sold-text">Sold:</span>
          <span className="sold-amount">${soldValue} / {soldGoal}</span>
        </p>
        <p className="raised">
          <span className="raised-text">Raised:</span>
          <span className="raised-amount">${raisedValue}/ {raisedGoal}</span>
        </p>
      </div>
    </div>
  );
}

export default InfoDataCoin;