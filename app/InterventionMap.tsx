"use client";

import "leaflet/dist/leaflet.css";

import {
  Circle,
  CircleMarker,
  MapContainer,
  TileLayer,
  Tooltip,
} from "react-leaflet";

const laSeyneCenter: [number, number] = [43.103, 5.878];

// Zone principale recommandée pour une activité de conciergerie.
const interventionRadius = 15_000;

export default function InterventionMap() {
  return (
    <div
      className="interventionMap"
      role="img"
      aria-label="Carte indiquant une zone principale d'intervention d'environ quinze kilomètres autour de La Seyne-sur-Mer"
    >
      <MapContainer
        center={laSeyneCenter}
        zoom={11}
        scrollWheelZoom={false}
        zoomControl
        className="leafletMap"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Circle
          center={laSeyneCenter}
          radius={interventionRadius}
          pathOptions={{
            color: "#d98162",
            fillColor: "#d98162",
            fillOpacity: 0.18,
            opacity: 0.95,
            weight: 3,
          }}
        />

        <CircleMarker
          center={laSeyneCenter}
          radius={7}
          pathOptions={{
            color: "#ffffff",
            fillColor: "#123047",
            fillOpacity: 1,
            weight: 3,
          }}
        >
          <Tooltip
            permanent
            direction="top"
            offset={[0, -8]}
            opacity={1}
          >
            La Seyne-sur-Mer
          </Tooltip>
        </CircleMarker>
      </MapContainer>
    </div>
  );
}