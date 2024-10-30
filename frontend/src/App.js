import './App.css';
import {useState} from "react";


function App() {
    const v = [1, 2, 3,4,5,6,7];
    const [map_lon_lat, set_map_lon_lat] = useState([]);
    const data = [{lon: 'xxx', lat: 'yyy'},{lon: 'vvv', lat: 'zzz'}];


function DictMapCoordinates(){
    let output = data.map(v =>[ v.lat, v.lon]);
    console.log(output);
}


function ApperList(lon, lat){
    let array = map_lon_lat;
    let element = { lon: lon, lat: lat };
    array.push(element);
    set_map_lon_lat(array);
    console.log("load", map_lon_lat)
}
function ListCoordinates({value}){
    const listItems = value.map((number) => <ol key={number.toString()}>{number}</ol>);
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
                <div className="block"><ListCoordinates value={v}/></div>
          <div className="block"><InputCoordinates/></div>
        </div>
      </div>
  );
}

export default App;
