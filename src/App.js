import "./App.css";
import SearchEngine from "./SearchEngine.js";
import GeneralInformation from "./GeneralInformation.js";
import DaysForecast from "./DaysForecast.js";
function App() {
  return (
    <div className="App">
      <div className="App-container">
        <div className="row">
          <SearchEngine />
        </div>
        <div className="row-todayforecast">
          <GeneralInformation />
        </div>
        <div className="row-daysforecast">
          <div className="col">
            <DaysForecast />
          </div>
          <div className="col">
            <DaysForecast />
          </div>
          <div className="col">
            <DaysForecast />
          </div>
          <div className="col">
            <DaysForecast />
          </div>
          <div className="col">
            <DaysForecast />
          </div>
          <div className="col">
            <DaysForecast />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
