import React, { useEffect, useState } from "react";
import "./logo.webp";

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
      <div id="countdown-container">
          <p id={"presale"}>Presale in 3 days</p>
        <div className="countdown-wrapper">
          <div className="countdown-box">
            <h1>{timeLeft.days}</h1>
            <h4>Days</h4>
          </div>
          <div className="countdown-colon">
            <span></span>
            <span></span>
          </div>
          <div className="countdown-box">
            <h1>{timeLeft.hours}</h1>
            <h4>Hours</h4>
          </div>
          <div className="countdown-colon">
            <span></span>
            <span></span>
          </div>
          <div className="countdown-box">
            <h1>{timeLeft.minutes}</h1>
            <h4>Minutes</h4>
          </div>
          <div className="countdown-colon">
            <span></span>
            <span></span>
          </div>
          <div className="countdown-box">
            <h1>{timeLeft.seconds}</h1>
            <h4>Seconds</h4>
          </div>
        </div>
      </div>
  );
}

export default Countdown;