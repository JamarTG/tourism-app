import { APIProvider, Map } from "@vis.gl/react-google-maps";
import Coordinates from "../types/coordinates";

interface MapProps {
  coordinates: Coordinates;
}

function GoogleMap({ coordinates }: MapProps) {
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div >
        <Map style={{ width: "60vw", height: "80vh", borderRadius:90 }}
          zoom={9}
          center={{ lat: coordinates.latitude, lng: coordinates.latitude }}
        ></Map>
      </div>
    </APIProvider>
  );
}

export default GoogleMap;
