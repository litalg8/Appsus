import { EmailPreview } from './EmailPreview.jsx'
export function EmailList({ emails, removeEmail }) {
    return (
        <ul className="email-list clean-list">
            { emails.map(email =>
                <li key={ email.id }>
                    <EmailPreview email={ email } />
                    <button onClick={ () => removeEmail(email.id) }>x</button>
                </li>)
            }
        </ul>
    )
}