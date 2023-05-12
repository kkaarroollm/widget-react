import React, { useState, useEffect } from "react";
import logo from "./logo.webp";

function PriceDisplay({ apiUrl }) {
  const [realPrice, setRealPrice] = useState(null);
  const [launchPrice, setLaunchPrice] = useState(null);

  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setRealPrice(data.bpi.USD.rate_float);
        setLaunchPrice(data.bpi.GBP.rate_float);
      } catch (error) {
        //console.error(error);
      }
    }
    fetchApi();
  }, [apiUrl]);

  return (
    <div id="prices">
      <div className="head">
        <img id="logo" src={logo} alt="Logo" />
        <div className="price-detail">
          <span id="title">FINAL PRESALE ROUND!</span>
          <span id="price">
            1 SWDTKN ={" "}
            <span id="real-price" style={{ background: '#3aff71' }}>
              ${realPrice}
            </span>
          </span>
        </div>
      </div>
      <div>
        <p className="info">
          Stay tuned for IDO announcements. Launch price:
          <span id="launch-price" style={{ background: "red" }}>
            ${launchPrice}
          </span>
        </p>
      </div>
    </div>
  );
}

export default PriceDisplay;