import './arl-service-content-meta.scss'
import ArlTag from '../../components-generic/arl-tag/arl-tag'

function ArlServiceContentMeta ({tags}) {

    return (
        <div className="arl-service-content-meta">
            {
                tags.map( (tag, index) => {
                    return <ArlTag key={index}>{tag}</ArlTag>
                })
            }          
        </div>
    )
}

export default ArlServiceContentMeta