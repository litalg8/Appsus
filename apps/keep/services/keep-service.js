
export const keepService = {
    query, getById, remove, getEmpty, save,
    createNote, togglePin, changeStyle
}

function query() {
    return Promise.resolve(notes)
}
function remove(noteId) {
    notes = notes.filter(note => note.id !== noteId)
}
function togglePin(noteId) {
    const note = _getById(noteId)
    note.isPinned = !note.isPinned
    return Promise.resolve()

}
function getById(noteId) {
    const note = notes.find(note => note.id === noteId)
    return Promise.resolve({ ...note })
}
function save(noteToSave) {
    noteToSave.id ? _update(noteToSave) : _add(noteToSave);
}
function _getById(noteId) {
    return notes.find(note => note.id === noteId)
}

function getEmpty() {
    return { type: 'NoteText', isPinned: false, info: {}, style: { backgroundColor: '#1f2833', color: '#ffffff' } }
}

function createNote(type, value, isPinned, backgroundColor) {
    const color = (backgroundColor === '#ffd166' ? '#000000' : '#ffffff');
    var note = { type, isPinned, info: {}, style: { backgroundColor ,color} }
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
            note.info.todos = []
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
function changeStyle(noteId, color) {
    var note = _getById(noteId)
    console.log(noteId);
    console.log(color);
    console.log(note);
    note.style = {...note.style, backgroundColor: color}
    return Promise.resolve()
}

var notes = [
    {
        id: makeId(),
        type: 'NoteText',
        isPinned: false,
        info: {
            title: 'Always remember:',
            txt: 'If you can\'t love yourself..how in the hell can you love anyone else?'
        },
        style: {
            backgroundColor: '#1f2833',
            color: '#ffffff'
        }
    },
    {
        id: makeId(),
        type: 'NoteImg',
        isPinned: false,
        info: {
            title: 'Me reading React Console Errors...',
            url: './apps/keep/assets/img/really.gif',
            subtitle: '#BiancaGivingMeLife'
        },
        style: {
            backgroundColor: '#1f2833',
            color: '#ffffff'
        }
    },
    {
        id: makeId(),
        type: 'NoteTodos',
        isPinned: false,
        info: {
            label: 'To Do List:',
            todos: [
                { id: 'todo1', txt: 'Be ready', doneAt: null },
                { id: 'todo2', txt: 'So you don\'t have to get ready', doneAt: 187111111 }
            ]
        },
        style: {
            backgroundColor: '#1f2833',
            color: '#ffffff'
        }
    },
    {
        id: makeId(),
        type: 'NoteImg',
        isPinned: false,
        info: {
            title: 'Me at the beginning of the sprint...',
            url: './apps/keep/assets/img/alaska.gif',
            subtitle: '#AlaskaRealness'
        },
        style: {
            backgroundColor: '#1f2833',
            color: '#ffffff'
        }
    },
    {
        id: makeId(),
        type: 'NoteText',
        isPinned: false,
        info: {
            title: 'very important:',
            txt: 'Never let your inner saboteur win!'
        },
        style: {
            backgroundColor: '#1f2833',
            color: '#ffffff'
        }
    },
    {
        id: makeId(),
        type: 'NoteImg',
        isPinned: false,
        info: {
            title: 'Me at the end of the sprint...',
            url: './apps/keep/assets/img/ador.gif',
            subtitle: '#AdoreMyLove'
        },
        style: {
            backgroundColor: '#1f2833',
            color: '#ffffff'
        }
    },

];


function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}