const { Route, Link, Switch } = ReactRouterDOM;
import { mailService } from './services/mail-service.js'
import { EmailList } from './cmps/EmailList.jsx'
import { EmailDetails } from './cmps/EmailDetails.jsx'
import { EmailCompose } from './cmps/EmailCompose.jsx';
export class MailApp extends React.Component {

    state = {
        mails: [],
        filterBy: 'inbox'
    }

    componentDidMount() {
        this.loadMails();
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.loadMails();
        }
    }

    loadMails() {
        return mailService.query()
            .then(mails => { this.setState({ mails }) })
            .then(() => {
                switch (this.state.filterBy) {
                    case 'inbox':
                        this.setState({ mails: this.state.mails });
                        break;
                    case 'star':
                        this.setState({ mails: this.state.mails.filter(mail => mail.isStarred) });
                        break;
                    case 'read':
                        this.setState({ mails: this.state.mails.filter(mail => mail.isRead) });
                        break;
                    case 'unread':
                        this.setState({ mails: this.state.mails.filter(mail => !mail.isRead) });
                        break;
                }
            })
    }

    removeMail = (mailId) => {
        mailService.remove(mailId);
        this.loadMails().then(() => {
            this.props.history.push('/mail');
        });
    }

    toggleStarMail = (mailId) => {
        mailService.getById(mailId)
            .then(mail => mailService.toggleStarMail(mail))
            .then(() => this.loadMails())
    }

    toggleReadMail = (mailId) => {
        mailService.getById(mailId)
            .then(mail => mailService.toggleReadMail(mail))
            .then(() => this.loadMails())
    }

    filterBy = (ev) => {
        const filter = ev.target.name;
        this.setState({ filterBy: filter })
        // console.log(filter);
        this.loadMails().then(() => {


        })
    }

    render() {
        const unreadCount = mailService.getUnreadCount();
        const unreadCountToShow = unreadCount ? `(${unreadCount})` : '';
        return (
            <section className="mail-app">
                <h2>You've Got SheMail</h2>
                <button className="compose-btn"><Link to={`/mail/add`}>Compose</Link></button>
                <div className="mail-content-container">
                    <div className="side-nav flex">
                        <button className="filter-btn" onClick={this.filterBy} name="inbox">Inbox {unreadCountToShow}</button>
                        <button className="filter-btn" onClick={this.filterBy} name="star">Starred</button>
                        <button className="filter-btn" onClick={this.filterBy} name="read">Read</button>
                        <button className="filter-btn" onClick={this.filterBy} name="unread">Unread</button>
                    </div>
                    <div>
                        <EmailList mails={this.state.mails} removeMail={this.removeMail} toggleStarMail={this.toggleStarMail} toggleReadMail={this.toggleReadMail} />

                        <Switch>
                            <Route component={EmailCompose} path="/mail/add" />
                            <Route component={EmailDetails} path="/mail/:id" />
                        </Switch>
                    </div>
                </div>
            </section>
        )
    }
}