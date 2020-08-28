const { Link } = ReactRouterDOM
import { LongTxt } from '../../../cmps/LongTxt.jsx'
export function EmailPreview({ mail, removeMail, toggleStarMail }) {
    return (

        <div className={'mail-preview'}>
            <Link to={`/mail/${mail.id}`}>
                <span>{mail.from}</span>
            </Link>
            <Link to={`/mail/${mail.id}`}>
                <div className="mail-content flex">
                    <LongTxt className="mail-subject" txt={mail.subject} />
                    <LongTxt className="mail-body-preview" txt={mail.body} />
                </div>
            </Link>
            <div>
                {!mail.isStarred && <button className="mail-icon far fa-star " onClick={() => toggleStarMail(mail.id)}></button>}
                {mail.isStarred && <button className="mail-icon fas fa-star " onClick={() => toggleStarMail(mail.id)}></button>}
                <button className="mail-icon fas fa-trash " onClick={() => removeMail(mail.id)}></button>
            </div>
        </div >



    )
}