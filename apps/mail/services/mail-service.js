export const mailService = {
    query,
    remove
}

function query() {
    return Promise.resolve(emails);
}

function remove(emailId) {
    emails = emails.filter(email => email.id !== emailId);
}


var emails = [
    {
        id: 'email1',
        subject: 'Runway',
        body: 'Catagory is: React alians Eleganza',
        isRead: false,
        sentAt: 1551133930594
    },
    {
        id: 'email2',
        subject: 'Beacuse I\'m what?!',
        body: 'Sickening Bitch!',
        isRead: false,
        sentAt: 1551133930594
    },
    {
        id: 'email3',
        subject: 'She Done Already done had herses',
        body: 'Step yo pussy up!',
        isRead: false,
        sentAt: 1551133930594
    }

];