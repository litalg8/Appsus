export const keepService = {
    query, getById, remove,
}

function query() {
    return Promise.resolve(notes)
}
function remove(noteId) {
    notes = notes.filter(note => note.id !== noteId)
}
function getById(noteId) {
    const note = notes.find(note => note.id === noteId)
    return Promise.resolve(note)
}

var notes = [
    {
        id: 'note1',
        type: 'NoteText',
        isPinned: false,
        info: {
            txt: 'Fullstack Me Baby!'
        }
    },
    {
        id: 'note2',
        type: 'NoteImg',
        isPinned: false,
        info: {
            url: 'http://some-img/me',
            title: 'Me playing Mi'
        },
        style: {
            backgroundColor: '#ff7fe3'
        }
    },
    {
        id: 'note3',
        type: 'NoteTodos',
        info: {
            label: 'How was it:',
            todos: [
                { txt: 'Do that', doneAt: null },
                { txt: 'Do this', doneAt: 187111111 }
            ]
        }
    }

];