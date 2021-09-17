import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../App'

export default function MyFriendLists() {
    const {userState, userDispatch} = useContext(UserContext)

    const handleClick = (user) => {
        userDispatch({
            type: 'ADD_CHAT',
            payload: user,
        })
    }
    
    return (
        <div className = 'right-side'>
            <div className = 'right-side__wrapper'>
                <div>
                    <h6>
                        Active friends
                    </h6>
                    <div>
                        <div className="btn-icon btn-icon-default">
                            <i class="fas fa-video"></i>
                        </div>
                        <div className="btn-icon btn-icon-default">
                            <i class="fas fa-search"></i>
                        </div>
                        <div className="btn-icon btn-icon-default">
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                </div>
                
                    <ul>
                        { userState.friends ? userState.friends.map((friend, index) => (
                                <li key = {friend.id} className="body__item body__item--active" onClick = {() => handleClick(friend)}>
                                    <NavLink to= {`/profile/${friend.id}`}>
                                        <img src={friend.profile_pic} alt="" className = 'avatar-cg normal'/>
                                    </NavLink> 
                                    <span>
                                        {friend.name}
                                    </span>

                                    <span className = 'avatar-cg xxsmall' style = {{background: friend.active ? 'green' : 'red', position: 'absolute', right: '2em'}}></span>

                                </li>
                            
                        )) : 
                        <li>
                            <span>
                                No friends
                            </span>
                        </li>}
                    </ul>
                
            </div>
        </div>
    )
}
