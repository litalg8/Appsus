import { EmailPreview } from './EmailPreview.jsx'
export function EmailList({ mails, removeMail }) {
    return (
        <ul className="mail-list clean-list">
            { mails.map(mail =>
                <li key={ mail.id }>
                    <EmailPreview mail={ mail } />
                    <button onClick={ () => removeMail(mail.id) }>x</button>
                </li>)
            }
        </ul>
    )
}