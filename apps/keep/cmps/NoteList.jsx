import {NotePreview} from './NotePreview.jsx'
export function NoteList({ Modal, notes, removeNote }) {

    return (
        <ul className="note-list">
            {
            notes.map(note =>
                <li key={note.id}>
                    <NotePreview note={note} />
                    <button onClick={() => removeNote(note.id)}>x</button>
                </li>)
            }
        </ul>
    )
}