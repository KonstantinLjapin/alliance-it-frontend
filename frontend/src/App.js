import './App.css';
import {useState} from "react";





function ListCoordinates({value}){
    const listItems = value.map((number) => <ol key={number.toString()}>{number}</ol>);
    return(listItems);
}
function InputCoordinates() {
  const [lon, setFirstName] = useState('');
  function out() { console.log("OK")}
  return (
    <>
        <label>
            First name:
            <input
                value={lon}
                onChange={e => setFirstName(e.target.value)}
            />
            <button onClick={() => out()}>
                input
            </button>
        </label>
        {lon !== '' &&
            <p>Your name is {lon}.</p>
        }
    </>
  );
}

function App() {
    const v = [1,2,7]
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
