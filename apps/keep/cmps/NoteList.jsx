import { NotePreview } from './NotePreview.jsx'
const { Link } = ReactRouterDOM;
export function NoteList({ notes, removeNote, togglePin, className }) {
    return (

        <ul className={"note-list clean-note-list grid " + className}>
            {
                notes.map(note =>
                    <li className="note-card" style={{backgroundColor:note.style.backgroundColor}} key={note.id}>
                        <div className="note-header flex space-between">
                            <button className={'pin-btn fas fa-thumbtack ' + (note.isPinned ? 'pin' : 'unpin')} name="pin-note" onClick={() => togglePin(note.id)}></button>
                            {/* <Link to={`/note/${note.id}`}><button className="input-txt-btn fas fa-pencil-alt"></button></Link> */}
                            <button onClick={() => removeNote(note.id)}>x</button>
                        </div>
                        <NotePreview note={note} />

                    </li>)
            }
        </ul>
    )
}