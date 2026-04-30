function Cards(props) {
    const listaLinguaggiJsx = props.listLanguages.map(language => {
        const { id, title, description } = language;
        return (
            <div key={id} className="card">
                <div className="card-body">
                    <h2>{title}</h2>
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