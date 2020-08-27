import { keepService } from '../services/keep-service.js'

export class NoteEdit extends React.Component {
    state = {
        note: keepService.getEmpty(),
        placeholder: 'add your note here',
        type: 'NoteText',
        value: '',
        isPinned: false

    }

    elInput = React.createRef()
    
    onInputChange = (ev) => {
        console.log('input', ev.target.name)
        console.log('input', ev.target.value)
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
        ev.preventDefault()
        this.setState({
            isPinned: !this.state.isPinned
        })

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
        return (
            <div className="note-edit flex align-center">
                <input ref={this.elInput} name="text" value={note.info.txt || ''}
                    placeholder={this.state.placeholder} type="text" onChange={this.onInputChange} />
                <button className="fas fa-plus" onClick={this.addNote}></button>
                <button className="input-btn far fa-image" name="img-note" onClick={this.changeNoteType}></button>
                <button className="input-txt-btn fas fa-pencil-alt" name="txt-note" onClick={this.changeNoteType}></button>
                <button className="list-btn far fa-check-square" name="list-note" onClick={this.changeNoteType}></button>
                <button className="pin-btn fas fa-thumbtack" name="pin-note" onClick={this.togglePin}></button>
            </div>
        )
    }



}
{/* <input type="file" onChange={this.onInputChange}/> */ }
// ../apps/keep/assets/img/alaska.gif
// {note.isPinned ? 'unpin' : 'pin'}