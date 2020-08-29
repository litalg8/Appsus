export class NoteVideo extends React.Component {
    render() {
        const note = this.props.note;
        return (
            <section className="video-card"> 
                <h3>{note.info.title}</h3>
                <iframe width="100%"src={note.info.url}></iframe>
                <h4>{note.info.subtitle}</h4>
            </section>
        )
    }
}