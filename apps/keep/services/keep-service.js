export const keepService = {
    query, getById, remove, getEmpty, save,createNote
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
function save(noteToSave) {
    noteToSave.id ? _update(noteToSave) : _add(noteToSave);
}

function getEmpty() {
    return { type: 'NoteText', isPinned: false, info: {}, style: { backgroundColor: '#f8f660' } }
}

function createNote(type, value, isPinned) {
    var note = { type, isPinned, info: {}, style: { backgroundColor: '#f8f660' } }
    var key;
    switch (type) {
        case 'NoteText':
            key = 'txt'
            break;
        case 'NoteImg':
            key = 'url'
            break;
        case 'NoteTodos':
            key = 'label'
            note.info.todos= []
            break;
    }
    note.info[[key]] = value;
    console.log(note);
    return note;
}

function _add(note) {
    const noteToAdd = {
        ...note,
        id: makeId()
    }
    notes = [noteToAdd, ...notes]
}
function _update(noteToSave) {
    notes = notes.map(note => note.id === noteToSave.id ? noteToSave : note)
    return noteToSave
}

var notes = [
    {
        id: 'note1',
        type: 'NoteText',
        isPinned: false,
        info: {
            txt: 'Fullstack Me Baby!'
        },
        style: {
            backgroundColor: '#1f2833'
        }
    },
    {
        id: 'note2',
        type: 'NoteImg',
        isPinned: false,
        info: {
            url: '../apps/keep/assets/img/really.gif',
            title: 'Me on React Console Errors...'
        },
        style: {
            backgroundColor: '#1f2833'
        }
    },
    {
        id: 'note3',
        type: 'NoteTodos',
        info: {
            label: 'How was it:',
            todos: [
                { id: 'todo1', txt: 'Do that', doneAt: null },
                { id: 'todo2', txt: 'Do this', doneAt: 187111111 }
            ]
        },
        style: {
            backgroundColor: '#1f2833'
        }
    }

];


function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}