import React from 'react';
import {createRoot} from "react-dom/client";
import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

// const GoogleDirectionsMap = () => (
//  <APIProvider apiKey={API_KEY} onLoad={() => console.log('Maps API has loaded.')}>
//    <Map
//       style={{width: '100vw', height: '300px'}}
//       defaultZoom={13}
//       defaultCenter={ { lat: -33.860664, lng: 151.208138 } }
//       onCameraChanged={ (ev: MapCameraChangedEvent) =>
//         console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
//       }>
//    </Map>
//  </APIProvider>
// );

const GoogleDirectionsMap = ({itinerary}) => {
    console.log(itinerary)
    let destinationPlaceIds = []
    let destinationPlaceIdsFiltered = []
    let waypoints = null
    let url = null
    if(itinerary.itineraryByDateIds && itinerary.itineraryByDateIds.length === 1){
        if(itinerary.itineraryByDateIds[0].destinationIds.length !== 0){
            destinationPlaceIds = itinerary.itineraryByDateIds[0].destinationIds.map(destination => {
                return destination.destinationInfo.place_id
            })
        }
    }
    if(destinationPlaceIds.length !== 0){
        destinationPlaceIdsFiltered = destinationPlaceIds.filter(destinationPlaceId => destinationPlaceId)
    }
    console.log(destinationPlaceIdsFiltered)
    if(destinationPlaceIdsFiltered){
        if(destinationPlaceIdsFiltered.length === 1){
            url = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=place_id:${destinationPlaceIdsFiltered[0]}&zoom=14`
        }else if(destinationPlaceIdsFiltered.length === 2){
            url = `https://www.google.com/maps/embed/v1/directions?key=${API_KEY}&origin=place_id:${destinationPlaceIdsFiltered[0]}&destination=place_id:${destinationPlaceIdsFiltered[1]}&mode=driving&zoom=14`
        }else if(destinationPlaceIdsFiltered.length > 2){
            for(let i = 1; i<destinationPlaceIdsFiltered.length-1; i++){
                waypoints = waypoints + `place_id:` + destinationPlaceIdsFiltered[i]
            }
            url = `https://www.google.com/maps/embed/v1/directions?key=${API_KEY}&origin=place_id:${destinationPlaceIdsFiltered[0]}&waypoints=${waypoints}&destination=place_id:${destinationPlaceIdsFiltered[1]}&mode=driving&zoom=14`
        }
    }
    console.log(url)
    return (
        <iframe
            width={"500px"}
            height={"500px"}
            src={url}
        />
    );
};


export default GoogleDirectionsMap;




