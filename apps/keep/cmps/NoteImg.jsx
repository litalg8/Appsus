export function NoteImg({note}) {
    return (
        <section className="img-card align-text">
            <h3>{note.info.title}</h3>
            <img src={note.info.url} />
            <h4>{note.info.subtitle}</h4>
        </section>
    )
}