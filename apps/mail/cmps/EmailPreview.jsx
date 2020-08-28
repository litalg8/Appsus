const { Link } = ReactRouterDOM
import { LongTxt } from '../../../cmps/LongTxt.jsx'
export function EmailPreview({ mail, removeMail }) {
    return (
        <React.Fragment>
            <div className="mail-content flex space-between">
                <span>{mail.subject} </span>
                <LongTxt txt={mail.body} />
            </div>
            <button className="remove-mail fas fa-trash " onClick={() => removeMail(mail.id)}></button>

        </React.Fragment>


    )
}