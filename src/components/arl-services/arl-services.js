import ArlService from '../arl-service/arl-service'
import { ServiceContext } from '../../globals/service-context'

function ArlServices (props) {

    return (
        <ServiceContext.Consumer>
            {
                ({serviceState}) => { 
                    
                    if ( Object.keys(serviceState.services).length ) {                       
                        return ( 
                            <ul className="list-group list-group-flush bg-transparent">
                                {
                                    serviceState.services.services.map( service => {
                                        return <ArlService key={service.id} properties={service.properties} serviceId={service.id} />
                                    })
                                }                           
                            </ul>
                        )
                    } else {
                        return <p>Loading data..</p>
                    }
                }
            }
        </ServiceContext.Consumer>         
    )
}

export default ArlServices;