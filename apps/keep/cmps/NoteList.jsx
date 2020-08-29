import { NotePreview } from './NotePreview.jsx'
const { Link } = ReactRouterDOM;
export function NoteList({ notes, removeNote, togglePin, className }) {
    return (

        <ul className={"note-list clean-note-list grid align-text" + className}>
            {
                notes.map(note =>
                    //color: note.style.color
                    <li className="note-card" style={{'backgroundColor':note.style.backgroundColor, 'color':note.style.color }} key={note.id}>
                    {/* {console.log(note)} */}
                        <div className="note-header flex space-between">
                            <button className={'pin-btn fas fa-thumbtack ' + (note.isPinned ? 'pin' : 'unpin')} name="pin-note" onClick={() => togglePin(note.id)}></button>
                            {/* <Link to={`/note/${note.id}`}><button className="input-txt-btn fas fa-pencil-alt"></button></Link> */}
                            <button className="btn-close" onClick={() => removeNote(note.id)}>X</button>
                        </div>
                        <NotePreview note={note} />

                    </li>)
            }
        </ul>
    )
}