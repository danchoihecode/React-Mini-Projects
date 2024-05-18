import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map({ onPointSelect, route }) {
  const mapRef = useRef(null);
  const routeRef = useRef(null);

  useEffect(() => {
    const map = L.map(mapRef.current).setView([21.027860926861657, 105.83424375610353], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    map.on('click', (event) => {
      const coordinates = event.latlng;
      onPointSelect(coordinates);
    });

    if (route && route.length > 0) {
      if (routeRef.current) {
        routeRef.current.removeFrom(map);
      }

      routeRef.current = L.polyline(route.map(([lng, lat]) => [lat, lng]), { color: 'blue' }).addTo(map);

      map.fitBounds(routeRef.current.getBounds());
    }

    return () => {
      map.off('click');
      map.remove();
    };
  }, [onPointSelect, route]);

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} ></div>;
};

