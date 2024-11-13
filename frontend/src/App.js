import './App.css';
import { useState, useEffect } from "react";

function App() {
    const [map_lon_lat, set_map_lon_lat] = useState([]);
    const [button_state, set_button_state] = useState(true);
    useEffect(() => {
        LoadGeographic();
    }, []);

    const UploaderGeographic = async (lon, lat) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "lon": lon, "lat": lat })
        };
        try {
            const response = await fetch('http://0.0.0.0:8000/api/register', requestOptions);
            const data = await response.json();
            console.log("my_data: ", data);
        } catch (error) {
            console.error(error);
        }
    };

    const LoadGeographic = async () => {
        if (button_state)
        {try {
            const response = await fetch('http://0.0.0.0:8000/api/allfilds');
            const data = await response.json();
            set_map_lon_lat(data.features);
            set_button_state(false);
        } catch (error) {
            console.error(error);
        }
        }

    };

    const ApperList = (lon, lat) => {
        if (!isNaN(lon) && !isNaN(lat)) {
            const element = { geometry: { coordinates: [parseFloat(lon), parseFloat(lat)] } };
            set_map_lon_lat(prev => [...prev, element]);
            UploaderGeographic(lon, lat);
            setTimeout(() => window.location.reload(), 300);
        } else {
            console.log("Error: invalid data lon, lat");
        }
    };

    const ListCoordinates = () => {
        if (map_lon_lat.length === 0) {
            console.log('empty_list App.js try load');
            LoadGeographic();
        }
        return map_lon_lat.map((item, index) => (
            <li key={index} align="left">lon= {item.geometry.coordinates[0]} || lat= {item.geometry.coordinates[1]}</li>
        ));
    };

    const InputCoordinates = () => {
        const [lon, setLon] = useState('Enter');
        const [lat, setLat] = useState('Enter');

        const SwitcherLATLON = () => {
            if (!isNaN(lon) && !isNaN(lat)) {
                set_button_state(true);
                ApperList(lon, lat);
                setLon('Enter');
                setLat('Enter');
            } else {
                console.log("Error: Invalid input values for lon and lat");
            }
        };

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
                {lon && <p>LON is {lon}.</p>}
                {lat && <p>LAT is {lat}.</p>}
                <button className="button" onClick={SwitcherLATLON}>
                    Input
                </button>
            </>
        );
    };

    return (
        <div className="App">
            <div className="wrapper">
                <div className="block"><ListCoordinates /></div>
                <div className="block"><InputCoordinates /></div>
            </div>
        </div>
    );
}

export default App;
