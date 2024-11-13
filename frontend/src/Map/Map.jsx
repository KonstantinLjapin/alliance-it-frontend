import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useState, useEffect } from "react";

export const Map = () => {
    const [mapLonLatJsx, setMapJsx] = useState([]);
    const defaultPosition = [55.75, 37.62]; // Default [latitude, longitude]
    const zoomLevel = 10;

    useEffect(() => {
        LoadGeographic();
    }, []);

    const LoadGeographic = async () => {
        try {
            const response = await fetch('http://0.0.0.0:8000/api/allfilds');
            const data = await response.json();

            // Логирование данных
            console.log("Данные от API:", data);

            if (data.features && data.features.length > 0) {
                setMapJsx(data.features);
            } else {
                console.warn("Нет доступных данных для рендеринга маркеров");
                setMapJsx([]); // Обнуляем состояние, если данных нет
            }
        } catch (error) {
            console.error("Ошибка при загрузке данных:", error);
            setMapJsx([]); // Обнуляем состояние в случае ошибки
        }
    };

    const ListCoordinates = (features) => {
        // Логируем координаты
        const coordinates = features.map((item) => item.geometry.coordinates);
        console.log("Координаты:", coordinates);
        return coordinates;
    };

    const positions = ListCoordinates(mapLonLatJsx);
    const renderPositions = positions.length > 0 ? positions : [defaultPosition];

    return (
        <MapContainer center={[renderPositions[0][1], renderPositions[0][0]]} zoom={zoomLevel} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {renderPositions.map((coords, index) => (
                <Marker key={index} position={[coords[1], coords[0]]}>
                    <Popup>
                        Coordinates: {coords[1]}, {coords[0]}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};
