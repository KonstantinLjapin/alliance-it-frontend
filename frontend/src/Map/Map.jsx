import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {useState} from "react";

function MShadow(){
    const [map_lon_lat_jsx, set_map_jsx] = useState([]);

    function LoadGeographic(){
        if (Object.keys(map_lon_lat_jsx).length === 0) {
        console.log('empty_list Map.jsx try load');
        fetch('http://0.0.0.0:8000/api/allfilds')
            .then(response => response.json())
            .then(data => set_map_jsx(data.features))
            .catch(error => console.error(error));
        }

        console.log("Map.jsx load")
    }
    LoadGeographic();
        return map_lon_lat_jsx;

}
function ListCoordinates(x){
        if (x.length === 0) {
        console.log('empty_list App.js try load');
        }
    return x.map((number) => number.geometry.coordinates)[0];
}
export const Map = () => {
    const shadow_fetcher= MShadow();
    const list_position= ListCoordinates(shadow_fetcher);
    const position = [55.75, 37.62]; // [latitude, longitude]
    const position2 = [5.75, 7.62]; // [latitude, longitude]
    const zoomLevel = 14;

    return (
    <MapContainer center={position} zoom={zoomLevel} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  );
}