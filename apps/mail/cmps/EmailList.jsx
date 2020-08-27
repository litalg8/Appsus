const { Link } = ReactRouterDOM

import { EmailPreview } from './EmailPreview.jsx'
export function EmailList({ mails, removeMail }) {
    return (
        <ul className="mail-list clean-list">
            {mails.map(mail =>
                <Link key={mail.id}  to={`/mail/${mail.id}`}>
                    <li className={mail.isRead ? '' : 'unread-mail'}>
                        <EmailPreview mail={mail} />
                        <button onClick={() => removeMail(mail.id)}>x</button>
                    </li>
                </Link>)
            }
        </ul >
    )
}