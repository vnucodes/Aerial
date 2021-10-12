import ArlServiceCarousel from '../arl-service-carousel/arl-service-carousel'
import ArlServiceContent from '../arl-service-content/arl-service-content'
import './arl-service.scss'

function ArlService({properties, serviceId}) {

    return (
        <li className="list-group-item arl-service">
            <div className="row g-0">
                <div className="col-5">
                    <ArlServiceCarousel media={properties.media} serviceId={serviceId}/>
                </div>
                <div className="col-7">
                    <ArlServiceContent 
                    type={properties.type} 
                    title={properties.title}
                    tags={properties.tags}
                    ratings={properties.ratings}
                    reviews={properties.reviews}
                    charges={properties.charges}
                    />
                </div>
            </div>           
        </li>
    )
}

export default ArlService;