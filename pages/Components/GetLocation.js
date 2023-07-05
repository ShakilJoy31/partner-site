import { useEffect, useState, useRef} from 'react';
import LocationComponent from './LocationComponent';
import { LoadScript } from '@react-google-maps/api';

const GetLocation = () => {
    const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(position => {
            const {latitude, longitude} = position.coords;
            setLatitude(latitude)
            setLongitude(longitude)
            console.log(latitude, longitude);
        })
    },[])
    
    return (
        <div className='text-black'>
      {latitude && longitude ? (
        <p>
          Latitude: {latitude}, Longitude: {longitude}
        </p>
      ) : (
        <p>Loading location...</p>
      )}
      <LoadScript googleMapsApiKey="API_KEY">
        <LocationComponent latitude={latitude} longitude={longitude} />
      </LoadScript>
    </div>
    );
};

export default GetLocation;