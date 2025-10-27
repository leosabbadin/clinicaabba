"use client";

import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const clinicPosition = { lat: 51.5074, lng: -0.1278 }; // London

export default function LocationMap() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div className="flex h-full w-full items-center justify-center rounded-lg border bg-muted text-muted-foreground">
        <p>Google Maps API key is missing.</p>
      </div>
    );
  }

  return (
    <APIProvider apiKey={apiKey}>
      <div className="h-full w-full overflow-hidden rounded-lg shadow-md">
        <Map
          defaultCenter={clinicPosition}
          defaultZoom={14}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          mapId="abba-digital-physio-map"
        >
          <Marker position={clinicPosition} />
        </Map>
      </div>
    </APIProvider>
  );
}
