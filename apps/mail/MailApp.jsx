const { Route } = ReactRouterDOM;
import { mailService } from './services/mail-service.js'
import { EmailList } from './cmps/EmailList.jsx'
import { EmailDetails } from './cmps/EmailDetails.jsx'
export class MailApp extends React.Component {

    state = {
        mails: []
    }

    componentDidMount() {
        this.loadMails();
    }

    loadMails() {
        mailService.query()
            .then(mails => {
                this.setState({ mails })
            })
    }

    removeMail = (mailId) => {
        mailService.remove(mailId);
        this.loadMails();
    }

    render() {
        return (
            <section className="mail-app">
                <h2>You've Got Mail</h2>
                <h2>You've Got SheMail</h2>
                {/* side nav (inbox, trash, sent...) */}
                <EmailList mails={this.state.mails} removeMail={this.removeMail} />
                <Route component={EmailDetails} path="/mail/:id" />
            </section>
        )
    }
}