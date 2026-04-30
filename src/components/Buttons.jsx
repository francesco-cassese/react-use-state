function Buttons(props) {
    const { listLanguages, onSelect, activeId } = props;
    const buttonListJsx = props.listLanguages.map(language => {
        const { id, title } = language;
        const btnClass = (id === activeId) ? 'btn-warning' : 'btn-primary';
        return (
            <li className="me-2" key={id}>
                <button onClick={() => onSelect(language)} className={`btn ${btnClass}`}>{title}</button>
            </li>
        )
    })
    return (
        <>{buttonListJsx}</>
    )
}
export default Buttons;