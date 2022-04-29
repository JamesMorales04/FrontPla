import { useState, useEffect } from "react";
import parcel from "./parcel.svg";
import "./App.css";

function App() {
  const [plots, setPlots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "PLA Plots";
    fetch("https://back-pla.herokuapp.com/api/v1/Plot?page=1&size=100")
      .then((res) => res.json())
      .then((result) => {
        setPlots(result);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Plots</h1>
      <div className="plot-list">
        {plots.map((plot, index) => (
          <div key={index} className="plot-item">
            <img src={parcel}></img>
            <div>
              <strong>Id:</strong> {plot.plotId}
            </div>
            <div>
              <strong>Size:</strong> {plot.size}
            </div>
            <div>
              <strong>Location:</strong> {plot.location}
            </div>
            <div>
              <strong>Crop suitability:</strong> {plot.cropSuitability}
            </div>
            <div>
              <strong>Status:</strong> {plot.status}
            </div>
          </div>
        ))}
      </div>
      <div>{loading && <div>Loading...</div>}</div>
    </div>
  );
}

export default App;
