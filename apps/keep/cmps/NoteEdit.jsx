import { ModalNote } from './ModalNote.jsx'
import { ColorChange } from './ColorChange.jsx'
import { keepService } from '../services/keep-service.js'
import { ListTodos } from './ListTodos.jsx'

export class NoteEdit extends React.Component {

    state = {
        note: null,
    }
    componentDidMount() {
        this.loadNote()
    }

    onInputChange = (ev) => {
        const key = this.getKeyByType(this.state.note.type);
        this.setState({
            note: { ...this.state.note, info: { ...this.state.note.info, [key]: ev.target.value }, }
        })

    }
    onTitleChange = (ev) => {
        this.setState({
            note: { ...this.state.note, info: { ...this.state.note.info, title: ev.target.value }, }
        })

    }
    saveNote = () => {
        keepService.save(this.state.note)
        this.props.history.push('/note');
    }
    loadNote = () => {
        const noteId = this.props.match.params.id
        keepService.getById(noteId)
            .then(note => { this.setState({ note }) })
            .catch(err => console.log(err))
    }
    getKeyByType(type) {
        switch (type) {
            case 'NoteText':
                return 'txt'
            case 'NoteImg':
                return 'url'
            case 'NoteTodos':
                return 'label'
        }
    }

    togglePin = (ev) => {
        ev.preventDefault()
        this.setState({
            isPinned: !this.state.isPinned

        }, () => console.log(this.state.isPinned))
        // this.loadNote()
    }
    onChangeColor = (color) => {
        this.setState({
            note: { ...this.state.note, style: { ...this.state.note.style, backgroundColor: color } }
        })
    }

    render() {
        const note = this.state.note;
        if (!note) return <div></div>
        var key = this.getKeyByType(note.type);
        return (
            <ModalNote returnTo='/note'>
                <div className="note-edit flex align-center">
                    <input ref={this.elInput} name="text" value={note.info.title}
                        placeholder={this.state.placeholder} className="edit-input" type="text" onChange={this.onTitleChange} />
                    <input ref={this.elInput} name="text" value={note.info[key] || ''}
                        placeholder={this.state.placeholder} className="edit-input" type="text" onChange={this.onInputChange} />
                    {note.type === 'NoteTodos' && <ListTodos todos={note.info.todos} />}
                    <div className="btn-container">
                        <ColorChange onChangeColor={this.onChangeColor} note={note} />
                        <button className="input-txt-btn fas fa-font" name="txt-note" onClick={this.changeNoteType}></button>
                        <button className={`pin-btn fas fa-thumbtack ${this.state.isPinned ? 'pin' : 'unpin'}`} name="pin-note" onClick={this.togglePin}></button>
                        <button className="save-btn" onClick={this.saveNote}>save</button>
                    </div>
                </div>
            </ModalNote>
        )
    }
}