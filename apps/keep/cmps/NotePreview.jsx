import { NoteText } from './NoteText.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteTodos } from './NoteTodos.jsx'

export function NotePreview({ note }) {


    switch (note.type) {
        case 'NoteText':
            return <NoteText />
        case 'NoteImg':
            return <NoteImg />
        case 'NoteTodos':
            return <NoteTodos />
        default:
            return <h1> oops...something bad happened</h1>
    }
}

