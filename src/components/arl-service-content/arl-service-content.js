import ArlServiceContentHeader from '../arl-service-content-header/arl-service-content-header';
import ArlServiceContentFooter from '../arl-service-content-footer/arl-service-content-footer';
import ArlServiceContentMeta from '../arl-service-content-meta/arl-service-content-meta';

function ArlServiceContent ( {type, title, tags, ratings, reviews, charges} ) {

    return (
        <div className="row g-0 h-100 align-items-start flex-column">
            <div className="col-12"><ArlServiceContentHeader title={title} type={type}/></div>
            <div className="col-12"><ArlServiceContentMeta tags={tags}/></div>          
            <div className="col-12 mt-auto"><ArlServiceContentFooter ratings={ratings} reviews={reviews} charges={charges}/></div> 
        </div>
    )
}

export default ArlServiceContent;