import React, { useState } from 'react';
import Map from './Map';
import axios from 'axios';
import opencage from 'opencage-api-client';
import { Button } from 'react-bootstrap';
import "./App5.css"

export default function App() {
  const [startCoordinates, setStartCoordinates] = useState(null);
  const [endCoordinates, setEndCoordinates] = useState(null);
  const [route, setRoute] = useState(null);
  const [startAddress, setStartAddress] = useState('');
  const [endAddress, setEndAddress] = useState('');

  const handlePointSelect = async (coordinates) => {
    try {
      const response = await opencage.geocode({ q: `${coordinates.lat},${coordinates.lng}`, key: 'fb30f6405ccb464c8dd9a30f81c18de3' });
      if (response.results && response.results.length > 0) {
        if (!startCoordinates) {
          setStartCoordinates(coordinates);
          setStartAddress(response.results[0].formatted);
        } else {
          setEndCoordinates(coordinates);
          setEndAddress(response.results[0].formatted);
        }
      }
    } catch (error) {
      console.error('Error fetching address:', error);
    }
  };

  const handleShowRouteClick = async () => {
    if (startCoordinates && endCoordinates) {
      try {
        const startCoord = `${startCoordinates.lng},${startCoordinates.lat}`;
        const endCoord = `${endCoordinates.lng},${endCoordinates.lat}`;

        const response = await axios.get(
          `https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf62482bb93e451660484e863c1ab19cc3ee2c&start=${startCoord}&end=${endCoord}`
        );

        const routeCoordinates = response.data.features[0].geometry.coordinates;
        setRoute(routeCoordinates);
      } catch (error) {
        console.error('Error fetching route:', error);
      }
    }
  };


  return (
    <div className="app">
      <div className="box">
        <div>
          <label>Bắt đầu</label>
          <input type="text" className="start" value={startCoordinates ? startAddress: ''} readOnly />
        </div>
        <div>
          <label>Kết thúc</label>
          <input type="text" className="end" value={endCoordinates ? endAddress : ''} readOnly />
        </div>
        <Button variant="success" className="button" onClick={handleShowRouteClick}>Đường đi</Button>
      </div>
      <div className="map">
        <Map onPointSelect={handlePointSelect} route={route}></Map>
      </div>
    </div>
  );
};


