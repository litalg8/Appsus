export class NoteImg extends React.Component {
    render() {
        const note = this.props.note;
        return (
            <section className="img-card"> 
                <h3>{note.info.title}</h3>
                <img src={note.info.url}/>
                <h4>{note.info.subtitle}</h4>
            </section>
        )
    }
}