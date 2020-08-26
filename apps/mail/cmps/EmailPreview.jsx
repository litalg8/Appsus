const { Link } = ReactRouterDOM
import {LongTxt} from '../../../cmps/LongTxt.jsx'
export function EmailPreview({ mail }) {
    return (
        <Link to={ `/mail/${mail.id}` }>
            <article className="mail-preview">
                <span>{mail.subject}</span>
                <LongTxt txt={mail.body}/>
            </article>
        </Link>
    )
}