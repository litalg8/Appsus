const { Link } = ReactRouterDOM

import { EmailPreview } from './EmailPreview.jsx'
export function EmailList({ mails, removeMail, toggleStarMail }) {
    return (
        <ul className="mail-list clean-list">
            {mails.map(mail =>
                
                    <li key={mail.id} className={ (mail.isRead ? '' : 'unread-mail')}>
                        <EmailPreview mail={mail} removeMail={removeMail} toggleStarMail={toggleStarMail} />
                       
                    </li>
                )
            }
        </ul >
    )
}