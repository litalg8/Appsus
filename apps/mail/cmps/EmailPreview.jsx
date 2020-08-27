const { Link } = ReactRouterDOM
import {LongTxt} from '../../../cmps/LongTxt.jsx'
export function EmailPreview({ mail }) {
    return (
        
            <article className={'mail-preview'}>
                <span>{mail.subject}</span>
                <LongTxt txt={mail.body}/>
            </article>

    )
}