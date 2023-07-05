import { useEffect, useState, useRef} from 'react';

import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const LocationComponent = ({latitude, longitude}) => {
    const mapContainerRef = useRef(null);

  useEffect(() => {
    const mapOptions = {
      center: { lat: latitude, lng: longitude },
      zoom: 14,
    };

    const map = new window.google.maps.Map(mapContainerRef.current, mapOptions);
    console.log(map)
    new window.google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: map,
      title: 'Your Location',
    });
  }, [latitude, longitude]);

    return (
        <div ref={mapContainerRef} style={{ height: '400px' }}></div>
    );
};

export default LocationComponent;