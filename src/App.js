import './index.css';
import Countdown from "./countdown";
import InfoDataCoin from "./raisedsold";
import PriceDisplay from "./coin-api";

function App() {
    const targetDate = new Date("2023-05-20").getTime();
  return (
      <div>
        <PriceDisplay apiUrl={'https://api.coindesk.com/v1/bpi/currentprice.json'}/>
        <InfoDataCoin apiUrl={'https://api.coindesk.com/v1/bpi/currentprice.json'}/>
        <Countdown targetDate={targetDate}/>
        <button id="connect-wallet">Connect wallet</button>
      </div>
  );
}

export default App;
