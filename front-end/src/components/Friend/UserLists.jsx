import React, { useContext } from 'react'
import { UserContext } from '../../App'
import useFriendActions from '../../hooks/useFriendActions'
import Friend from './Friend'

function UserLists({users}) {
    const {userState} = useContext(UserContext)
    const {sendFriendRequest} = useFriendActions()
    const handleSendFriendRequest = (user_id) => {
        sendFriendRequest(user_id)
    }

    const filterUser = (user) => {
    let s_index = userState.sendedFriendRequests.findIndex(
      (request) => request.user.id == user.id,
    )
    let r_index = userState.receivedFriendRequests.findIndex(
      (request) => request.user.id == user.id,
    )
    let already_friend = userState.currentUser.friends.findIndex(
      (friend) => friend.id == user.id,
    )
    let currentUser = userState.currentUser.id == user.id

    if (
      s_index === -1 &&
      r_index === -1 &&
      already_friend === -1 &&
      !currentUser
    ) {
      return true
    }
    return false
  }
    
    return (
        <div >
            <h2>
                People you may know
            </h2>

            {users && users.length &&
            <div className = 'friend-page__list'>
                {users.map((user) => (
                    filterUser(user) && 
                    <Friend key={user.id} user={user}>
                        <button className = 'btn btn-default'
                                onClick = {() => handleSendFriendRequest(user.id)}>
                            <i className = 'fas fa-user-plus small'></i>
                        </button>
                        <button className = 'btn'>
                            <i className = 'fas fa-times'></i>
                        </button>
                    </Friend>
                ))}    
            </div>}
        </div>
    )
}

export default UserLists
