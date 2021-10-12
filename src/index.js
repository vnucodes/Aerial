// React imports
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

// Bootstrap styles and script
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

// App styles
import './scss/global.scss'

// Aerial app components
import ArlWrapperServices from './components/arl-wrapper-services/arl-wrapper-services'
import ArlWrapperMap from './components/arl-wrapper-map/arl-wrapper-map'

// Global context
import { ServiceContext } from './globals/service-context'

// Axios
const axios = require( 'axios' )

// get services
async function getServices () {

  try {

    const response = await axios.get('./data-source-test/data.json');
    return response

  } catch (error) {
    console.log('---', error)
  }

}

function App( props ) {

  const [services, setServices] = useState({})

  // get services
  useEffect( () => {

    getServices()
    .then( response => {
      setServices( prevServices => {
        return response.data.area
      })
    })

  }, [])  

  return (
    <div className="container-fluid p-0">
      <ServiceContext.Provider value={{
        serviceState: { 
          services, 
          setServices 
        }
      }}>
      <div className="row g-0">
        <div className="col-7 py-5 px-4 bg-light">
          <ArlWrapperServices />        
        </div>
        <div className="col-5 vh-100 sticky-top">
          <ArlWrapperMap />
        </div>
      </div>
      </ServiceContext.Provider>
    </div>
  )
} 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
