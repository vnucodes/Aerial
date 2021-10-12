import './arl-ratings.scss'

function ArlRatings ({ratings, reviews}) {

    return (
        <div className="m-0 arl-service-ratings">
            <span className="material-icons align-middle arl-service-rating-icon">
            star_rate
            </span>
            <span className="align-middle arl-service-rating-count">{ratings.count}</span>
            <span className="align-middle arl-service-rating-review-count">({reviews.count})</span>
        </div>
    )
}

export default ArlRatings;