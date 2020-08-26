// import { NoteList } from './cmps/NoteList.jsx'
import { keepService } from './services/keep-service.js'
import { NoteList } from './cmps/NoteList.jsx';
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
    removeNote =(noteId) =>{
        keepService.remove(noteId)
        this.loadNotes()

    }
  
    render() {
        const notes = this.state.notes
        return (
            <section>
                <h2>Keepush</h2>
                <NoteList notes={notes} removeNote = {this.removeNote} />
            </section>
        )
    }
}