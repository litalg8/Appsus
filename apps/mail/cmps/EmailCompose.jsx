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
                <div className='mail-details'>
                    <h3>Send Mail</h3>
                    <p>Here will come an input</p>
                    To: <input value={this.state.mail.to} onChange={ this.onInputChange } name="to" placeholder="To..." type="text"/>
                    Subject: <input value={this.state.mail.subject} onChange={ this.onInputChange } name="subject" placeholder="Subject" type="text"/>
                    Message: <input value={this.state.mail.body} onChange={ this.onInputChange } name="body" placeholder="Type here your message..." type="text"/>

                    <button onClick={this.onAddMail}>Send</button>
                </div>
            </Modal>
        )
    }
}
