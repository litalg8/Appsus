export const mailService = {
    query,
    remove,
    getById,
    getEmpty,
    add,
    markAsReadMail,
    toggleStarMail,
    toggleReadMail,
    getUnreadCount
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
        sentAt: Date.now(),
        isStarred: false
    }
}

function remove(mailId) {
    mails = mails.filter(mail => mail.id !== mailId);
}

function toggleStarMail(mail) {
    mail.isStarred = !mail.isStarred;
    return Promise.resolve();
}

function getUnreadCount() {
    return mails.reduce((acc, mail) => {
        if(!mail.isRead) acc++;
        return acc;
    }, 0);
    
}

function toggleReadMail(mail) {
    mail.isRead = !mail.isRead;
    return Promise.resolve();
}

function markAsReadMail(mail) {
    if (!mail) return;
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
        from: 'alaska',
        to: 'alaska@gmail.com',
        subject: 'Runway',
        body: 'Catagory is: React alians Eleganza',
        isRead: false,
        sentAt: 1551133930594,
        isStarred: true
    },
    {
        id: 'mail2',
        from: 'alaska',
        to: 'alaska@gmail.com',
        subject: 'Beacuse I\'m what?!',
        body: 'Sickening!',
        isRead: false,
        sentAt: 1551133930594,
        isStarred: false
    },
    {
        id: 'mail3',
        from: 'alaska',
        to: 'alaska@gmail.com',
        subject: 'She Done Already done her herses',
        body: 'Step yo pussy up!',
        isRead: true,
        sentAt: 1551133930594,
        isStarred: false
    },
    {
        id: 'mail4',
        from: 'detox',
        to: 'alaska@gmail.com',
        subject: 'Meeting with Roxxxy',
        body: 'Hiiiiiiiii \nwe want to eat together!',
        isRead: true,
        sentAt: Date.now(),
        isStarred: true
    }

];