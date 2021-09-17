import React, { useContext, useEffect } from 'react'
import { UserContext, UIContext } from '../App'
import Friend from '../components/Friend/Friend'
import UserLists from '../components/Friend/UserLists'
import useFriendAction from '../hooks/useFriendActions'
import {
  fetchIncommingFriendRequests,
  fetchRecommandedUsers,
  fetchSendedFriendRequests,
} from '../services/UserServices'

function Friends() {
  const { userState, userDispatch } = useContext(UserContext)

  useEffect(() => {
    async function sendedFriendRequest() {
      const res = await fetchSendedFriendRequests()
      if (res.data) {
        userDispatch({
          type: 'SET_FRIENDS_REQUEST_SENDED',
          payload: res.data.friends,
        })
      }
    }

    async function incommingFriendRequest() {
      const res = await fetchIncommingFriendRequests()
      if (res && res.data) {
        userDispatch({
          type: 'SET_FRIENDS_REQUEST_RECEIVED',
          payload: res.data.friends,
        })
      }
    }

    async function recommandedUser() {
      const res = await fetchRecommandedUsers()
      if (res && res.data) {
        userDispatch({
          type: 'SET_USERS',
          payload: res.data.users,
        })
      }
    }

    recommandedUser()
    incommingFriendRequest()
    sendedFriendRequest()

    return () => {
      userDispatch({ type: 'REMOVE_SELECTED_USER_PROFILE', payload: null })
    }
  }, [])

  const {
    acceptFriendRequest,
    declineFriendRequest,
    cancelFriendRequest,
  } = useFriendAction()

  const handleAcceptFriendRequest = (request_id) => {
    acceptFriendRequest(request_id)
  }

  const handleDeclineFriendRequest = (request_id) => {
    declineFriendRequest(request_id)
  }

  const handleCancelFriendRequest = (request_id) => {
    cancelFriendRequest(request_id)
  }
    return (
        <div className = 'friend-page'>
          <div>
            {userState.receivedFriendRequests && userState.receivedFriendRequests.length !==0 &&
            <div>
                <h2>
                    Incoming friend requests
                </h2>

                <div className = 'friend-page__list'>
                    {userState.receivedFriendRequests.map((request) => (
                        <Friend key={request.id} user={request.user}>
                            <button className = 'btn btn-default'
                                    onClick = {() => handleAcceptFriendRequest(request.id)}>
                                <i className = 'fas fa-check'></i>
                            </button>
                            <button className = 'btn'
                                    onClick = {() => handleDeclineFriendRequest(request.id)}>
                                <i className = 'fas fa-times'></i>
                            </button>
                        </Friend>
                    ))}    
                </div>
            </div>}
            
                {userState.sendedFriendRequests && userState.sendedFriendRequests.length !==0 &&
            <div>
                <h2>
                    Sended friend request
                </h2>

                <div className = 'friend-page__list'>
                    {userState.sendedFriendRequests.map((request) => (
                        <Friend key={request.id} user={request.user}>
                            <button className = 'btn btn-default'
                                    onClick = {() => handleCancelFriendRequest(request.id)}>
                                <i className = 'fas fa-times'></i>
                            </button>
                        </Friend>
                    ))}  
                </div>
            </div>}

          </div>
            <UserLists users = {userState.users}/>
        </div>
    )
}

export default Friends
