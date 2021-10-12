import './arl-service-title.scss'

function ArlServiceTitle ({title, type}) {

    return (
        <h2 className="h5 arl-service-title">
            <small className="d-block">{type} in malvan</small>
            {title}
        </h2>
    )
}

export default ArlServiceTitle;
