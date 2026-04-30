function Card(props) {
    const listaLinguaggiJsx = props.listLanguages.map(language => {
        const { id, title, description } = language;
        return (
            <div key={id} className="card">
                <div className="card-body">
                    <button className="btn btn-primary">{title}</button>
                    <p>{description}</p>
                </div>
            </div>
        )
    })
    return (
        <>{listaLinguaggiJsx}</>
    )
}
export default Card