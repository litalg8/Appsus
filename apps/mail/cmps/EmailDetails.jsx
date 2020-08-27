import { mailService } from "../services/mail-service.js";
import { Modal } from '../../../cmps/Modal.jsx'

export class EmailDetails extends React.Component {
    state = {
        mail: null
    }

    componentDidMount() {
        // console.log('EmailDetails mounted');
        this.loadMail();
    }

    loadMail() {
        const mailId = this.props.match.params.id
        mailService.getById(mailId)
            .then(mail => this.setState({ mail }))
            .then(()=>mailService.markAsReadMail(this.state.mail))
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadMail()
        }
    }


    render() {
        const { mail } = this.state
        if (!mail) return <div>Loading....</div>
        return (
            <Modal returnTo='/mail'>
                <div className='mail-details'>
                    <h3>{mail.subject}</h3>
                    <p>{mail.body}</p>
                </div>
            </Modal>
        )
    }
}
