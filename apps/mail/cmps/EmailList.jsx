const { Link } = ReactRouterDOM

import { EmailPreview } from './EmailPreview.jsx'
export function EmailList({ mails, removeMail }) {
    return (
        <ul className="mail-list clean-list">
            {mails.map(mail =>
                <Link key={mail.id}  to={`/mail/${mail.id}`}>
                    <li className={'mail-preview flex space-between ' + (mail.isRead ? '' : 'unread-mail')}>
                        <EmailPreview mail={mail} removeMail={removeMail} />
                       
                    </li>
                </Link>)
            }
        </ul >
    )
}