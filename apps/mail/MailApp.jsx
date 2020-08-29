const { Route, Link, Switch } = ReactRouterDOM;
import { mailService } from './services/mail-service.js'
import { EmailList } from './cmps/EmailList.jsx'
import { EmailDetails } from './cmps/EmailDetails.jsx'
import { EmailCompose } from './cmps/EmailCompose.jsx';
export class MailApp extends React.Component {

    state = {
        mails: [],
        filterBy: ''
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
            .then(mails => {
                this.setState({ mails })
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

    filterBy = (ev) => {
        const filter = ev.target.name;
        console.log(filter);
        this.loadMails().then(()=>{

            switch (filter) {
                case 'inbox':
                    this.setState({mails: this.state.mails});
                    break;
                case 'star':
                    this.setState({mails: this.state.mails.filter(mail => mail.isStarred)});
                    break;
            }
        })
    }

    render() {
        return (
            <section className="mail-app">
                <h2>You've Got SheMail</h2>
                <button className="compose-btn"><Link to={`/mail/add`}>Compose</Link></button>
                <div className="mail-content-container">
                    <div className="side-nav flex">
                        <button className="filter-btn" onClick={this.filterBy} name="inbox">Inbox</button>
                        <button className="filter-btn" onClick={this.filterBy} name="star">Starred</button>
                    </div>
                    <div>
                        <EmailList mails={this.state.mails} removeMail={this.removeMail} toggleStarMail={this.toggleStarMail}/>
                   
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