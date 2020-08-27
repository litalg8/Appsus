// import { NoteList } from './cmps/NoteList.jsx'
import { keepService } from './services/keep-service.js'
import { NoteList } from './cmps/NoteList.jsx';
import { NoteEdit } from './cmps/NoteEdit.jsx';
export class KeepApp extends React.Component {
    state = {
        notes: []

    }

    componentDidMount() {
        this.loadNotes();
    }

    loadNotes = () => {
        keepService.query()
            .then(notes => {
                console.log(notes)
                this.setState({ notes })
            })
            .catch(err => console.log(err))
    }
    removeNote = (noteId) => {
        keepService.remove(noteId)
        this.loadNotes()
    }
    togglePin = (noteId) => {
        keepService.getById(noteId)
            .then(note => {
                keepService.togglePin(note)
                this.loadNotes()
                console.log(noteId);
                console.log(note);
            })

    }

    render() {
        const notes = this.state.notes
        return (
            <section>
                <h2>Keepush</h2>
                <NoteEdit loadNotes={this.loadNotes} />
                <NoteList notes={notes.filter(note => note.isPinned)} removeNote={this.removeNote} togglePin={this.togglePin} />
                <NoteList notes={notes.filter(note => !note.isPinned)} removeNote={this.removeNote} togglePin={this.togglePin} />
            </section>
        )
    }
}