import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfobox from './LocationInfobox'

const Map = ({eventData, center, zoom}) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map(ev =>{
        if(ev.categories[0].id === 8) {
            return (<LocationMarker 
        lat = {ev.geometries[0].coordinates[1]}
        lng = {ev.geometries[0].coordinates[0]}
        onClick = {() => setLocationInfo({id : ev.id, title : ev.title})
        }
        />)

        }
        return null;

    })

    return (
        <div className= "map">
        <GoogleMapReact
            bootstrapURLKeys = {{ key : 
            'AIzaSyCgql2C7hWN6PaiQuSK2wuWyWSgf63vj1M'}}
            defaultCenter = { center }
            defaultZoom = { zoom } 
        >
        {markers}
        </GoogleMapReact>
        {locationInfo && <LocationInfobox info = {locationInfo} />}

            
        </div>
    )
}

Map.defaultProps = {
    center : {
        lat : 27.4728, //dibrugarh
        lng : 94.9120
    },
    zoom : 6
}

export default Map
