const {Link} = ReactRouterDOM 
import { NoteText } from './NoteText.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteTodos } from './NoteTodos.jsx'

export function NotePreview({ note }) {


    switch (note.type) {
        case 'NoteText':
            return <Link to={`/keep/${note.id}`}><NoteText note={note}/></Link>
        case 'NoteImg':
            return <Link to={`/keep/${note.id}`}><NoteImg note={note}/></Link>
        case 'NoteTodos':
            return <Link to={`/keep/${note.id}`}><NoteTodos note={note} /></Link>
        default:
            return <h1> oops...something bad happened</h1>
    }
}

