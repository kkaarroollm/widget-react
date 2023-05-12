import './index.css';
import Countdown from "./countdown";
import InfoDataCoin from "./raisedsold";
import PriceDisplay from "./coin-api";
import {priceApiUrl, targetDate, infoDataApiUrl} from "./config";

function App() {
  return (
      <div>
        <PriceDisplay apiUrl={priceApiUrl}/>
        <InfoDataCoin apiUrl={infoDataApiUrl}/>
        <Countdown targetDate={targetDate}/>
        <button id="connect-wallet">Connect wallet</button>
      </div>
  );
}

export default App;
