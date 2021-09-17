const User = require('../../models/User');
const CreateNotification = require('../CreateNotification')

module.exports = async ({req, res, data}) => {
    const friend = await User.findById(req.user.id).populate('friends')

    friend.friends.forEach(async user => {
        if(user.socketId) {
            req.io.to(user.socketId).emit(key, {data})
            if(notif_body) {
                let notification = await CreateNotification({user:user ,body: notif_body})
                req.io.to(user.socketId).emit("Notification", {data:notification})  
            }
        }
    })
}