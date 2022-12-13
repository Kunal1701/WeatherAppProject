
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStreetView, faSun ,faCloud,faCloudRain} from "@fortawesome/free-solid-svg-icons";
import "./Cardcss.css";
import Cardscript from "./CardScript.js";
import { useLocation } from "react-router-dom";
function Card() {

  const { state } = useLocation();
  let data = state.data;
  const arr = [data];
  const tempstatus = arr[0].weather[0].main;
  var icon=faSun;
  var color = "#eccc68";
  if(tempstatus === "Clouds"){
    icon=faCloud;
    color = "#dfe4ea";
  }
 else if(tempstatus === "Rainy"){
    icon=faCloudRain;
    color = "#a4b0be";
 }

  return (
    <div className="main">
      <div className="card">
        <div id="weathericon">
          <FontAwesomeIcon icon={icon} color={color}className="mainicon" />
        </div>
        <div className="info">
          <h2 className="location mx-auto text-center">
            <FontAwesomeIcon icon={faStreetView} /> {arr[0].name},{arr[0].sys.country}
          </h2>
          <p id="dailyinfo" className="mx-auto mb-7 text-center">
            <Cardscript />
          </p>
          <h1 className="temp mx-auto text-center">{arr[0].main.temp}°C</h1>
          <h3 className="tempminmax mx-auto text-center">Min {arr[0].main.temp_min}°C | Max {arr[0].main.temp_max}°C</h3>
        </div>
      </div>
    </div>
  );
}
export default Card;
