import ArlServicesHeading from '../arl-services-heading/arl-services-heading'
import ArlServices from '../arl-services/arl-services'

function ArlWrapperServices (props) {
   
    return (
        <div className="row justify-content-center">
            <div className="col-11">
              <ArlServicesHeading />
              <ArlServices />
            </div>
        </div>
    )
}

export default ArlWrapperServices