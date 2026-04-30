function Buttons(props) {
    const buttonListJsx = props.listLanguages.map(language => {
        const { id, title } = language;
        return (
            <li className="me-2" key={id}>
                <button className="btn btn-primary">{title}</button>
            </li>
        )
    })
    return (
        <>{buttonListJsx}</>
    )
}
export default Button