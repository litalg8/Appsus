import {NotePreview} from './NotePreview.jsx'
export function NoteList({ Modal, notes, removeNote }) {

    return (
        <ul className="note-list clean-list grid">
            {
            notes.map(note =>
                <li style={note.style} key={note.id}>
                    <NotePreview note={note} />
                    <button onClick={() => removeNote(note.id)}>x</button>
                </li>)
            }
        </ul>
    )
}