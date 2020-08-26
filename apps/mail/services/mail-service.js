export const mailService = {
    query,
    remove,
    getById
}

function query() {
    return Promise.resolve(mails);
}

function remove(mailId) {
    mails = mails.filter(mail => mail.id !== mailId);
}

function getById(mailId) {
    const mail = mails.find(mail => mail.id === mailId);
    return Promise.resolve(mail);
}


var mails = [
    {
        id: 'mail1',
        subject: 'Runway',
        body: 'Catagory is: React alians Eleganza',
        isRead: false,
        sentAt: 1551133930594
    },
    {
        id: 'mail2',
        subject: 'Beacuse I\'m what?!',
        body: 'Sickening Bitch!',
        isRead: false,
        sentAt: 1551133930594
    },
    {
        id: 'mail3',
        subject: 'She Done Already done had herses',
        body: 'Step yo pussy up!',
        isRead: false,
        sentAt: 1551133930594
    }

];