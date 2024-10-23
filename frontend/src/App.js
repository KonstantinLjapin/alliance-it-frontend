import './App.css';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import {Marker, Popup} from "react-leaflet";

function MapShow() {
    return (<MapContainer center={[55.751, 37.617]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[55.751, 37.617]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>

    )
}


function App() {
    return (
        <>
            <div className="App-map">
                <MapShow/>
            </div>

    </>

  );
}

export default App;
