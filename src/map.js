import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

// Coordinates for Home and Portfolio in Kano, Nigeria
const homeLocation = [12.002179, 8.591956]; 
const portfolioLocation = [12.006, 8.585]; 

const SimpleMap = () => {
  return (
    <MapContainer 
      center={homeLocation} 
      zoom={13} 
      style={{ height: '400px', width: '100%' }}
      zoomControl={false}  // Disable zoom controls (+/-)
    >
      {/* Map Tiles from OpenStreetMap */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Marker for Home Location */}
      <Marker position={homeLocation}>
        <Popup>Home Location - Kano</Popup>
      </Marker>

      {/* Marker for Portfolio Location */}
      <Marker position={portfolioLocation}>
        <Popup>Portfolio Location - Kano</Popup>
      </Marker>
    </MapContainer>
  );
};

export default SimpleMap;
