// mapbox config
import { config } from '../../config/config'
// Leaflet JS styles and scripts
import 'leaflet/dist/leaflet.css'
import './arl-wrapper-map.scss'

import { useEffect } from 'react'

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

function ArlWrapperMap (props) {

    useEffect(() => {

        const loadMap = async () => {
            mapboxgl.accessToken = config.mapbox;
            var map = new mapboxgl.Map({
            container: 'wrapper-map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [73.47645927400538, 16.054642501294353],
            zoom: 11
            });
        }

        //loadMap()

    }, [])
    
    

    return (
        <div id="wrapper-map"></div>
    )
}

export default ArlWrapperMap 