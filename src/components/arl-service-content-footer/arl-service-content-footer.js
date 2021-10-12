import ArlRatings from '../../components-generic/arl-ratings/arl-ratings';
import ArlCost from '../../components-generic/arl-cost/arl-cost'
import './arl-service-content-footer.scss'

function ArlServiceContentFooter ({ratings, reviews, charges} ) {

        return (
            <div className="d-flex justify-content-between align-items-end arl-service-content-footer">
                <ArlRatings ratings={ratings} reviews={reviews} />
                <ArlCost charges={charges} />
            </div>
        )
}

export default ArlServiceContentFooter;


