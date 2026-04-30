function Cards(props) {
    const { id, title, description } = props.info;
    return (
        <div key={id} className="card">
            <div className="card-body">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}
export default Cards;