import { NoteText } from './NoteText.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteTodos } from './NoteTodos.jsx'

export function NotePreview({ note }) {


    switch (note.type) {
        case 'NoteText':
            return <NoteText note={note} />
        case 'NoteImg':
            return <NoteImg note={note}/>
        case 'NoteTodos':
            return <NoteTodos note={note} />
        default:
            return <h1> oops...something bad happened</h1>
    }
}

