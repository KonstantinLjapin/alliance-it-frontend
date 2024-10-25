import './App.css';
import {useState} from "react";


function ListCoordinates(){
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) => <ol key={number.toString()}>{number}</ol>);
    return(listItems);
}
function InputCoordinates() {
  const [lon, setFirstName] = useState('');
  function out
  return (
    <>
        <label>
            First name:
            <input
                value={lon}
                onChange={e => setFirstName(e.target.value)}
            />
            <button onClick={() => }>
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
