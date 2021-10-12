import './arl-fav.scss'

function ArlFav (props) {

    return (
        <button type="button" className="btn p-2 rounded-circle arl-fav">
            <span className="material-icons">
            { props.isFav ? 'favorite' : 'favorite_border' }
            </span>
        </button>
    )
}

export default ArlFav