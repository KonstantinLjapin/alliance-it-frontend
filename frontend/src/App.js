import './App.css';
import {useState} from "react";


function App() {
    const [map_lon_lat, set_map_lon_lat] = useState([]);
function UploaderGeographic(){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
  "lon": -73.6101167,
  "lat": 44.6548902
})
    };
    fetch('http://0.0.0.0:8000/api/register', requestOptions)
        .then(response => response.text())
        .then((geojson) => {
             console.log("my_data: ", geojson);});
}
function LoadGeographic(){
    fetch('http://0.0.0.0:8000/api/allfilds')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
}
function ApperList(lon, lat){
    let array = map_lon_lat;
    let element = { lon: lon, lat: lat };
    array.push(element);
    set_map_lon_lat(array);
    LoadGeographic();
    UploaderGeographic();
}

function ListCoordinates(){
    if (Object.keys(map_lon_lat).length === 0) {
        console.log('пуст');
    }
    const listItems= <li>{[1,2,3,4,5]}</li>;
    console.log("load", map_lon_lat)
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
