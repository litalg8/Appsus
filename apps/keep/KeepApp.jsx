// import { NoteList } from './cmps/NoteList.jsx'
const { Route } = ReactRouterDOM;
import { keepService } from './services/keep-service.js'
import { NoteList } from './cmps/NoteList.jsx';
import { NoteAdd } from './cmps/NoteAdd.jsx';
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
                // console.log(notes)
                this.setState({ notes })
            })
            .catch(err => console.log(err))
    }
    removeNote = (noteId) => {
        keepService.remove(noteId)
        this.loadNotes()
    }
    togglePin = (noteId) => {
        keepService.togglePin(noteId)
            .then(note => {
                this.loadNotes()
                console.log(noteId);
                console.log(note);
            })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.loadNotes();
        }
    }


    render() {
        const notes = this.state.notes
        return (
            <section>
                <h2>Keepush</h2>
                <Route component={NoteEdit} path="/note/:id" />
                <NoteAdd loadNotes={this.loadNotes} />
                <NoteList className={"pinned-list"} notes={notes.filter(note => note.isPinned)} removeNote={this.removeNote} togglePin={this.togglePin} />
                <NoteList className={"unpinned-list"} notes={notes.filter(note => !note.isPinned)} removeNote={this.removeNote} togglePin={this.togglePin} />
            </section>
        )
    }
}