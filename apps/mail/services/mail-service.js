export const mailService = {
    query,
}

function query() {
    return Promise.resolve(emails)
}


var emails = [
    {
        subject: 'Runway',
        body: 'Catagory is: React alians Eleganza',
        isRead: false,
        sentAt: 1551133930594
    },
    {
        subject: 'Beacuse I\'m what?!',
        body: 'Sickening Bitch!',
        isRead: false,
        sentAt: 1551133930594
    },
    {
        subject: 'She Done Already done had herses',
        body: 'Step yo pussy up!',
        isRead: false,
        sentAt: 1551133930594
    }

];