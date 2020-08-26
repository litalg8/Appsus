import {mailService} from './services/mail-service.js'
import {EmailList} from './cmps/EmailList.jsx'
export class MailApp extends React.Component {

    state = {
        emails: []
    }

    componentDidMount() {
        this.loadEmails();
    }

    loadEmails() {
        mailService.query()
        .then(emails => {
            this.setState({emails})
        })
    }

    removeEmail = (emailId) => {
        mailService.remove(emailId);
        this.loadEmails();
    }

    render() {
        return (
            <section className="email-app">
                <h2>You've Got Mail</h2>
                <h2>You've Got SheMail</h2>
                <EmailList emails={this.state.emails} removeEmail={this.removeEmail} />
            </section>
        )
    }
}