import { keepService } from '../services/keep-service.js'

export class NoteAdd extends React.Component {
    state = {
        note: keepService.getEmpty(),
        placeholder: 'add your note here',
        type: 'NoteText',
        value: '',
        isPinned: false,

    }

    componentDidMount() {
        // console.log('mounted');
    }
    elInput = React.createRef()

    onInputChange = (ev) => {
        // console.log('input', ev.target.name)
        // console.log('input', ev.target.value)
        // const value = ev.target.type === 'text';
        this.setState({
            note: { ...this.state.note, info: { ...this.state.note.info, txt: ev.target.value } },
            value: ev.target.value
        })
        // this.setState({ note: { ...this.state.note, info: { ...this.state.note.info, txt: value } } })
    }
    addNote = (ev) => {
        ev.preventDefault()
        // console.log('adding note')
        // console.log(keepService.query())
        var note = keepService.createNote(this.state.type, this.state.value, this.state.isPinned)
        keepService.save(note)
        this.props.loadNotes()
    }
    togglePin = (ev) => {
        // console.log('pin',ev.target.classList);
        // console.log(this.state.isPinned)
        ev.preventDefault()
        this.setState({
            isPinned: !this.state.isPinned

        }, () => console.log(this.state.isPinned))

    }
    changeNoteType = (ev) => {
        console.log(ev.target.name)
        switch (ev.target.name) {
            case 'img-note':
                this.setState({ placeholder: 'insert your img url', type: 'NoteImg' })
                break;
            case 'txt-note':
                this.setState({ placeholder: 'insert your Text', type: 'NoteText' })
                break;
            case 'list-note':
                this.setState({ placeholder: 'insert your items with a comma', type: 'NoteTodos' })
                break;
        }

    }


    render() {
        const note = this.state.note
        var key;
        switch (note.type) {
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
        return (
            <div className="note-edit flex align-center">
                <input ref={this.elInput} name="text" value={note.info[[key]] || ''}
                    placeholder={this.state.placeholder}  className="edit-input" type="text" onChange={this.onInputChange} />
                <div className="btn-container">
                    <button className="fas fa-plus" onClick={this.addNote}></button>
                    <button className="input-btn far fa-image" name="img-note" onClick={this.changeNoteType}></button>
                    <button className="input-txt-btn fas fa-pencil-alt" name="txt-note" onClick={this.changeNoteType}></button>
                    <button className="list-btn far fa-check-square" name="list-note" onClick={this.changeNoteType}></button>
                    <button className={`pin-btn fas fa-thumbtack ${this.state.isPinned ? 'pin' : 'unpin'}`} name="pin-note" onClick={this.togglePin}></button>
                </div>
            </div>
        )
    }



}
{/* <input type="file" onChange={this.onInputChange}/> */ }
// ../apps/keep/assets/img/alaska.gif
// {note.isPinned ? 'unpin' : 'pin'}