

export class NoteText extends React.Component {

    render() {
        const note = this.props.note;
        return (
            <section className="text-card">
            <div className="note-preview"> 
                <h3 >{note.type}</h3>
                <h4 >{note.info.txt}</h4>
            </div>
            </section>
        )
    }
}

