import ArlServiceTitle from "../arl-service-title/arl-service-title";
import ArlFav from '../../components-generic/arl-fav/arl-fav';

function ArlServiceContentHeader({title, type}) {

    return (
        <div className="d-flex justify-content-between align-items-start">
            <ArlServiceTitle title={title} type={type} />
            <ArlFav isFav={false} /> 
        </div>
    )
}

export default ArlServiceContentHeader;