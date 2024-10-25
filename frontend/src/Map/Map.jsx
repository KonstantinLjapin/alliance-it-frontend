import React from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

export const Map = () => {
  const position = [55.75, 37.62]; // [latitude, longitude]
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
};