import React, {useState, useContext}from 'react'
import {NavLink, Link} from 'react-router-dom'
import {UserContext, UIContext} from '../../App'  


function LeftSide() {
    const {userState} = useContext(UserContext);
    const {uiDispatch} = useContext(UIContext);
    const handleClick = (selectingPage) => {
        uiDispatch({ type: 'SET_SELECTING_PAGE', payload: selectingPage})
    }
    
    return (
        <div className = 'left-side'>
            <ul>
                <NavLink to = {`/profile/${userState.currentUser.id}`} onClick={() => handleClick('profile')}>
                    <li>
                        <i className="icon-cg sm fas fa-user"></i>
                        <span>{userState.currentUser.name}</span>
                    </li>
                </NavLink>
                <NavLink to='/friends' onClick={() => handleClick('friends')}>
                    <li>
                        <i className="icon-cg sm fas fa-user-friends"></i>
                        <span>Friends</span>
                    </li>
                </NavLink>
                <NavLink to='/groups' onClick={() => handleClick('groups')}>
                    <li>
                        <i className="icon-cg sm fas fa-users"></i>
                        <span>Groups</span>
                    </li>
                </NavLink>
                <NavLink to='/market' onClick={() => handleClick('market')}>
                    <li>
                        <i className="icon-cg sm fas fa-store"></i>
                        <span>Marketplace</span>
                    </li>
                </NavLink>
                <NavLink to='/events' onClick={() => handleClick('events')}>
                    <li>
                        <i class="icon-cg sm fas fa-calendar-week"></i>
                        <span>Events</span>
                    </li>
                </NavLink>
                <NavLink to='/memories' onClick={() => handleClick('memories')}>
                    <li>
                        <i className="icon-cg sm fas fa-history"></i>
                        <span>Memories</span>
                    </li>
                </NavLink>
            </ul>
        </div>
    )
}

export default LeftSide
