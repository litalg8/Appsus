import { mailService } from "../services/mail-service.js";
import { Modal } from '../../../cmps/Modal.jsx'

export class EmailCompose extends React.Component {
    state = {
        mail: mailService.getEmpty()
    }

    componentDidMount() {
        // console.log('EmailCompose mounted');
    }

    onAddMail = (ev) => {
        ev.preventDefault();
        mailService.add(this.state.mail);
        this.props.history.push('/mail')
    }

    onInputChange = (ev) => {
        const value = ev.target.value
        this.setState({ mail: { ...this.state.mail, [ev.target.name]: value } }, this.printState);
    }
    printState() {
        console.log(this.state.mail);
    }

    render() {
        
        return (
            <Modal  returnTo='/mail'>
                <form className='mail-details flex'>
                    <h3>Send Mail</h3>
                    <p>Here will come an input</p>
                    <label htmlFor="to" >To:</label> <input value={this.state.mail.to} onChange={ this.onInputChange } id="to"className="mail-input" name="to" placeholder="To..." type="text"/>
                   <label htmlFor="subject" >Subject: </label><input value={this.state.mail.subject} onChange={ this.onInputChange } id="subject" className="mail-input" name="subject" placeholder="Subject" type="text"/>
                   <label htmlFor="mail-body" >Message:</label> <textarea value={this.state.mail.body} onChange={ this.onInputChange } id="mail-body" className="compose-input" name="body" placeholder="Type here your message..."/>

                    <button onClick={this.onAddMail}>Send</button>
                </form>
            </Modal>
        )
    }
}
