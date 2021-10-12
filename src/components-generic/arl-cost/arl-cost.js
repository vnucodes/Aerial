function ArlCost ({charges}) {

    return (
        <div className="m-0">
        <span className="align-middle me-1 fs-5 fw-bold">{charges.charge}</span>
        <span className="align-middle">/ {charges.per}</span>
        </div>
    )
}

export default ArlCost;