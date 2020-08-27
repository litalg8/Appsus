import { NotePreview } from './NotePreview.jsx'
export function NoteList({ Modal, notes, removeNote,togglePin }) {

    // function togglePin(ev,note) {
    //     debugger
    //     console.log(note);  
    //     console.log(note);  
    //     note.isPinned = !note.isPinned;  
    //     console.log(note.isPinned);  
    // }

    return (

        <ul className="note-list clean-list grid">
            {
                notes.map(note =>
                    <li className="note-card" style={note.style} key={note.id}>
                        <div className="note-header flex space-between">
                            <button className={'pin-btn fas fa-thumbtack ' +  (note.isPinned ? 'pin' : 'unpin')} name="pin-note" onClick={() => togglePin(note.id)}></button>
                            <button onClick={() => removeNote(note.id)}>x</button>
                        </div>
                        <NotePreview note={note} />

                    </li>)
            }
        </ul>
    )
}