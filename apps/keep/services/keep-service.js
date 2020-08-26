export const keepService = {
    query,
}

function query() {
    return Promise.resolve(notes)
}


var notes = [
    {
        type: "NoteText",
        isPinned: false,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        type: "NoteImg",
        isPinned: false,
        info: {
            url: "http://some-img/me",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#ff7fe3"
        }
    }

];