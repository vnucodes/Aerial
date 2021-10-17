import './arl-title.scss'

function ArlTitle ({title, type}) {

    return (
        <h2 className="h5 arl-service-title">
            <small className="d-block">{type} in malvan</small>
            {title}
        </h2>
    )
}

export default ArlTitle;
