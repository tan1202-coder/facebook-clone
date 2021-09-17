const Notification = require('../models/Notification')
const FilterUserData = require('./FilterUserData')

module.exports = async ({user, body}) => {
    const userId = user.id;
    const notification = new Notification({userId, body})
    const saveNotification = await notification.save()
    return {
        id: saveNotification.id,
        body,
        user: FilterUserData(saveNotification.user),
        createAt: notification.createAt
    }
}