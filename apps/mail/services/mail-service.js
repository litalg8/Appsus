export const mailService = {
    query,
    remove,
    getById,
    getEmpty,
    add,
    markAsReadMail
}

function query() {
    return Promise.resolve(mails);
}

function getEmpty() {
    return {
        id: Math.random().toFixed(8),
        from: 'alaska@gmail.com',
        to: '',
        subject: '',
        body: '',
        isRead: false,
        sentAt: Date.now()
    }
}

function remove(mailId) {
    mails = mails.filter(mail => mail.id !== mailId);
}

function markAsReadMail(mail) {
    mail.isRead = true;
}

function add(mailToAdd) {
    mails = [mailToAdd, ...mails];
    console.log(mails);
}

function getById(mailId) {
    const mail = mails.find(mail => mail.id === mailId);
    return Promise.resolve(mail);
}


var mails = [
    {
        id: 'mail1',
        from: 'alaska@gmail.com',
        to: 'alaska@gmail.com',
        subject: 'Runway',
        body: 'Catagory is: React alians Eleganza',
        isRead: false,
        sentAt: 1551133930594
    },
    {
        id: 'mail2',
        from: 'alaska@gmail.com',
        to: 'alaska@gmail.com',
        subject: 'Beacuse I\'m what?!',
        body: 'Sickening!',
        isRead: false,
        sentAt: 1551133930594
    },
    {
        id: 'mail3',
        from: 'alaska@gmail.com',
        to: 'alaska@gmail.com',
        subject: 'She Done Already done had herses',
        body: 'Step yo pussy up!',
        isRead: false,
        sentAt: 1551133930594
    }

];