import { useState } from "react";
import Image from "next/image";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import { StarIcon } from "@heroicons/react/solid";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/df981339/cktxqafwb0b6n17qxexkqh8mo"
      mapboxApiAccessToken={process.env.mapbox_public_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div className="marker-div" key={result.id}>
          <Marker longitude={result.long} latitude={result.lat}>
            <LocationMarkerIcon
              onClick={() => setSelectedLocation(result)}
              className="h-7 w-7 cursor-pointer"
              fill="#FF385C"
            />
          </Marker>

          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              closeButton={false}
              latitude={result.lat}
              longitude={result.long}
              tipSize={12}
              sortByDepth={true}
              className="popup"
            >
              <div className="w-[275px] h-[308px] flex flex-col">
                {/* Image */}
                <div className="relative w-full h-[180px] flex-shrink-0">
                  <Image
                    src={result.img}
                    layout="fill"
                    onjectFit="contain"
                    className="rounded-t-[25px]"
                  />
                </div>
                {/* Bottom */}
                <div className="p-3">
                  {/* Rating and Reviews */}
                  <div className="flex items-center text-sm text-light">
                    <span className="ml-[-2px]">
                      <StarIcon className="h-4 w-4" fill="#FF385C" />
                    </span>
                    <span className="ml-1 text-gray-700">
                      {result.star.toFixed(2)}
                    </span>
                    <span className="text-gray-400 ml-1">
                      ({result.review})
                    </span>
                  </div>

                  {/* Location and Title */}
                  <div className="text-lg text-light text-gray-700">
                    <div>{result.title}</div>
                  </div>

                  {/* Price */}
                  <div>
                    <span className="font-bold">
                      ${new Intl.NumberFormat().format(result.price)}
                    </span>{" "}
                    <span className="text-gray-700">/ night</span>
                  </div>
                </div>
              </div>
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
