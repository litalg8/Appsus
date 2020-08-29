const {Link} = ReactRouterDOM 
import { NoteText } from './NoteText.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteTodos } from './NoteTodos.jsx'
import { NoteVideo } from './NoteVideo.jsx'

export function NotePreview({ note }) {
    switch (note.type) {
        case 'NoteText':
            return <Link to={`/note/${note.id}`}><NoteText note={note}/></Link>
        case 'NoteImg':
            return <Link to={`/note/${note.id}`}><NoteImg note={note}/></Link>
        case 'NoteTodos':
            return <Link to={`/note/${note.id}`}><NoteTodos note={note} /></Link>
        case 'NoteVideo':
            return <Link to={`/note/${note.id}`}><NoteVideo note={note} /></Link>
        default:
            return <h1> oops...something bad happened</h1>
    }
}

