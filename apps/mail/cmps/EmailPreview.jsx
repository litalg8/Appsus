const { Link } = ReactRouterDOM
import {LongTxt} from '../../../cmps/LongTxt.jsx'
export function EmailPreview({ email }) {
    return (
        <Link to={ `/email/${email.id}` }>
            <article className="email-preview">
                <span>{email.subject}</span>
                <LongTxt txt={email.body}/>
            </article>
        </Link>
    )
}