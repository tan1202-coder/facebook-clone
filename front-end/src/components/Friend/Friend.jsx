import React, { useContext, useEffect } from 'react'
import { UIContext, UserContext } from '../../App'

function Friend({user, children}) {
    const { userState, userDispatch } = useContext(UserContext)
    const { uiState, uiDispatch} = useContext(UIContext)

    useEffect(() => {
        filterMutualFriends()
    },[user.friends.length])

    const filterMutualFriends = () => {
        const users = userState.currentUser.friends.filter((friend) => {
            user.friends.includes(friend.id)
        })
        return users
    }
    

 
    return (
        <div className = 'square-card square-card-default'>
                <div className = 'square-card-default__img'>
                    <img src={user.profile_pic} alt=""/>
                </div>

                <div className = 'square-card-default__name'>
                        <h6>
                            {user.name}
                        </h6>
                        <span>
                            {filterMutualFriends() && filterMutualFriends().length} matual friends
                        </span>
                </div>

                <div className = 'square-card-default__actions'>
                    {children}
                </div> 
        </div>
    )
}

export default Friend
