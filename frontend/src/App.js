import './App.css';
import {useState} from "react";


function App() {
    const v = [1, 2, 7,5,7,7];
    const data = [{lon: 'xxx', lat: 'yyy'},{lon: 'vvv', lat: 'zzz'}];


function DictMapCoordinates(){
    let output = Object.fromEntries(data.map(v => [ v.lat, v.lon]));
    console.log(output);
}


function ApperList(lon, lat){
console.log(lon, lat)
}
function ListCoordinates({value}){
    const listItems = value.map((number) => <ol key={number.toString()}>{number}</ol>);
    DictMapCoordinates();
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
