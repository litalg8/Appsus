
export function NoteText({ note }) {
    return (
        <section className="text-card align-text">
            <div className="note-preview">
                <h3 >{note.info.title}</h3>
                <h4 >{note.info.txt}</h4>
            </div>
        </section>
    )

}

