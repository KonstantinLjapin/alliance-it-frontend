import './App.css';
import {useState} from "react";


function App() {
    const v = [1, 2, 7];

    function ApperList(){
console.log("TAP")
}
function ListCoordinates({value}){
    const listItems = value.map((number) => <ol key={number.toString()}>{number}</ol>);
    return(listItems);
}
function InputCoordinates() {
        let [lon, setLon] = useState(null);
        let [lat, setLat] = useState(null);
        function SwitcherLATLON(){
            if (!(!lat !== '')) {

            } else {
                ApperList();
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
