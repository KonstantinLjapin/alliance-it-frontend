import './App.css';
import {useState} from "react";


function App() {
    const [map_lon_lat, set_map_lon_lat] = useState([]);
function UploaderGeographic(lon,lat ){

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
  "lon": lon,
  "lat": lat
})
    };
    fetch('http://0.0.0.0:8000/api/register', requestOptions)
        .then(response => response.json())
        .then((data) => {console.log("my_data: ", data);})
        .catch(error => console.error(error));
}
function LoadGeographic(){
    fetch('http://0.0.0.0:8000/api/allfilds')
  .then(response => response.json())
  .then(data => set_map_lon_lat(data.features))
  .catch(error => console.error(error));
}
function ApperList(lon, lat){

    function isNumber(n){
        if (Number(n)) {
            return true;
        }
        else {
            if (parseFloat(n)) {
                return true;
            }
        }
        return false;
    }
    if (isNumber(lon) && isNumber(lat)){
        let array = map_lon_lat;
        let element = { lon: lon, lat: lat };
        array.push(element);
        set_map_lon_lat(array);
        UploaderGeographic(lon, lat);
        setTimeout(function(){window.location.reload();}, 300);
    }
    else {
        console.log("Error not validate data lon, lat")

    }


}

function ListCoordinates(){
    if (Object.keys(map_lon_lat).length === 0) {
        console.log('empty_list try load');
        LoadGeographic();
    }
    const listItems= map_lon_lat.map((number) =>
  <li align="left">lon= {number.geometry.coordinates[0]}  || lat= {number.geometry.coordinates[1]}</li>);
    return(listItems);
}
function InputCoordinates() {
        let [lon, setLon] = useState('1');
        let [lat, setLat] = useState('1');
        function SwitcherLATLON(){
            if ((/[^1]/.test(lon))&&(/[^1]/.test(lat))) {
                ApperList(lon, lat);
                setLon('1')
                setLat('1')
            }
            else {
                setLon('1')
                setLat('1')
            }
        }

  return (
      <>
          <label>
              LON:
              <input
                  value={lon}
                  onChange={e => setLon(e.target.value)}
              />
          </label>
          <label>
              LAT:
              <input
                  value={lat}
                  onChange={e => setLat(e.target.value)}
              />

          </label>
          {lon !== '' &&
              <p>LON is {lon}.</p>
          }
          {lat !== '' &&
              <p>LAT is {lat}.</p>
          }
          <button onClick={() => SwitcherLATLON()}>
              input
          </button>
      </>
  );

}

return (
        <div className="App">
            <div className="wrapper">
                <div className="block"><ListCoordinates/></div>
          <div className="block"><InputCoordinates/></div>
        </div>
      </div>
  );
}

export default App;
