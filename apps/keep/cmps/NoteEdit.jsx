import { keepService } from '../services/keep-service.js'
import { Modal } from '../../../cmps/Modal.jsx'
import { ListTodos } from './ListTodos.jsx'

export class NoteEdit extends React.Component {

    state = {
        note: null,
    }
    componentDidMount() {
        this.loadNote()
    }
    onEditNote = (ev) => {
        ev.preventDefault();
        keepService.edit(this.state.note);
        this.props.history.push('/note');

    }
    onInputChange = (ev) => {
        const key = this.getKeyByType(this.state.note.type);
        this.setState({
            note: { ...this.state.note, info: { ...this.state.note.info, [key]: ev.target.value }, }
        }, this.saveNote)

    }
    saveNote = () => {
        keepService.save(this.state.note)
        // this.loadNote()
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
    render() {
        const note = this.state.note;
        if (!note) return <div></div>
        var key = this.getKeyByType(note.type);
        return (

            <Modal returnTo='/note'>
                <div className="note-edit flex align-center">
                    <input ref={this.elInput} name="text" value={note.info[[key]] || ''}
                        placeholder={this.state.placeholder} className="edit-input" type="text" onChange={this.onInputChange} />
                    <div className="btn-container">
                        <button className="fas fa-plus" onClick={this.addNote}></button>
                        <button className="input-btn far fa-image" name="img-note" onClick={this.changeNoteType}></button>
                        <button className="input-txt-btn fas fa-pencil-alt" name="txt-note" onClick={this.changeNoteType}></button>
                        <button className="list-btn far fa-check-square" name="list-note" onClick={this.changeNoteType}></button>
                        <button className={`pin-btn fas fa-thumbtack ${this.state.isPinned ? 'pin' : 'unpin'}`} name="pin-note" onClick={this.togglePin}></button>
                        {note.type === 'NoteTodos' && <ListTodos todos={note.info.todos} />}
                        <button className="save-btn" onClick={this.saveNote}>save</button>
                        
                        
                    </div>
                </div>
            </Modal>
        )
    }
}