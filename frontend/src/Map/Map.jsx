import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useState, useEffect } from "react";

const MShadow = () => {
    const [map_lon_lat_jsx, set_map_jsx] = useState([]);

    useEffect(() => {
        LoadGeographic();
    }, []);

    const LoadGeographic = async () => {
        try {
            const response = await fetch('http://0.0.0.0:8000/api/allfilds');
            const data = await response.json();
            set_map_jsx(data.features);
        } catch (error) {
            console.error(error);
        }
    };

    return map_lon_lat_jsx;
};

const ListCoordinates = (features) => {
    return features.map((item) => item.geometry.coordinates);
};

export const Map = () => {
    const shadow_fetcher = MShadow();
    const list_position = ListCoordinates(shadow_fetcher);
    const defaultPosition = [55.75, 37.62]; // Default [latitude, longitude]
    const zoomLevel = 10;

    const positions = list_position.length > 0 ? list_position : [defaultPosition];

    return (
        <MapContainer center={positions[0].length ? [positions[0][1], positions[0][0]] : defaultPosition} zoom={zoomLevel} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {positions.map((coords, index) => (
                <Marker key={index} position={[coords[1], coords[0]]}>
                    <Popup>
                        Coordinates: {coords[1]}, {coords[0]}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};
