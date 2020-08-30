import { keepService } from '../services/keep-service.js'
import { ColorChange } from './ColorChange.jsx'

export class NoteAdd extends React.Component {
    state = {
        note: keepService.getEmpty(),
        placeholder: 'add your note here',
        type: 'NoteText',
        value: '',
        isPinned: false,
        backgroundColor: '#1f2833'

    }

    componentDidMount() {
        // console.log('mounted');
    }
    elInput = React.createRef()

    onInputChange = (ev) => {
        const key = this.getKeyByType(this.state.note.type);
        this.setState({
            note: { ...this.state.note, info: { ...this.state.note.info, [key]: ev.target.value } },
            value: ev.target.value
        })

    }

    addNote = (ev) => {
        ev.preventDefault()
        if (this.state.value === '') return
        var note = keepService.createNote(this.state.type, this.state.value, this.state.isPinned, this.state.backgroundColor)
        keepService.save(note)
        this.setState({
            placeholder: ''
        })
        this.props.loadNotes()
    }

    togglePin = (ev) => {
        ev.preventDefault()
        this.setState({
            isPinned: !this.state.isPinned

        })

    }
    changeNoteType = (ev) => {
        switch (ev.target.name) {
            case 'img-note':
                this.setState({ placeholder: 'insert your img url', type: 'NoteImg' })
                break;
            case 'txt-note':
                this.setState({ placeholder: 'insert your Text', type: 'NoteText' })
                break;
            case 'video-note':
                this.setState({ placeholder: 'insert your Video', type: 'NoteVideo' })
                break;
            case 'list-note':
                this.setState({ placeholder: 'insert your items with a comma', type: 'NoteTodos' })
                break;
        }
    }
    getKeyByType(type) {
        switch (type) {
            case 'NoteText':
                return 'txt'
            case 'NoteImg':
                return 'url'
            case 'NoteTodos':
                return 'label'
            case 'NoteVideo':
                return 'url'
        }
    }
    onChangeColor = (backgroundColor) => {
        this.setState({ backgroundColor })

    }
    render() {
        const note = this.state.note
        var key = this.getKeyByType(note.type);
        return (
            <div className="note-add flex align-center">
                <input ref={this.elInput} name="text" value={note.info[[key]] || ''}
                    placeholder={this.state.placeholder} className="add-input" type="text" onChange={this.onInputChange} />
                <div className="btn-container-add">
                    <ColorChange onChangeColor={this.onChangeColor} note={note} />
                    <button className="fas fa-plus" onClick={this.addNote}></button>
                    <button className="input-btn far fa-image" name="img-note" onClick={this.changeNoteType}></button>
                    <button className="input-txt-btn fas fas fa-font" name="txt-note" onClick={this.changeNoteType}></button>
                    <button className="list-btn fas fa-play-circle" name="video-note" onClick={this.changeNoteType}></button>
                    <button className={`pin-btn fas fa-thumbtack ${this.state.isPinned ? 'pin' : 'unpin'}`} name="pin-note" onClick={this.togglePin}></button>
                </div>
            </div>
        )
    }
}

// ../apps/keep/assets/img/alaska.gif
