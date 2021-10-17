import ArlTitle from '../../components-generic/arl-title/arl-title';
import ArlFav from '../../components-generic/arl-fav/arl-fav';

function ArlServiceContentHeader({title, type}) {

    return (
        <div className="d-flex justify-content-between align-items-start">
            <ArlTitle title={title} type={type} />
            <ArlFav isFav={false} /> 
        </div>
    )
}

export default ArlServiceContentHeader;