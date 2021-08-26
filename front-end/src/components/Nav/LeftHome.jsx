import React, {useState, useContext}from 'react'
import {NavLink, Link} from 'react-router-dom'
import {UserContext, UIContext} from '../../App'  
import '../styles/LeftSide.scss'

function LeftSide() {
    const {userState} = useContext(UserContext);
    const {uiDispatch} = useContext(UIContext);
    const handleClick = (selectingPage) => {
        uiDispatch({ type: 'SET_SELECTING_PAGE', payload: selectingPage})
    }
    
    return (
        <div className = 'left-side'>
            <ul>
                <NavLink to = {`/profile/${userState.currentUser.id}`} className = 'left-side__nav-link' onClick={() => handleClick('profile')}>
                    <li>
                        <i className="fas fa-user"></i>
                        <span>Nguyễn Nhựt Tân</span>
                    </li>
                </NavLink>
                <NavLink to='/friends' className='left-side__nav-link' onClick={() => handleClick('friends')}>
                    <li>
                        <i className="fas fa-user-friends"></i>
                        <span>Friends</span>
                    </li>
                </NavLink>
                <NavLink to='/groups' className='left-side__nav-link' onClick={() => handleClick('groups')}>
                    <li>
                        <i className="fas fa-users"></i>
                        <span>Groups</span>
                    </li>
                </NavLink>
                <NavLink to='/market' className='left-side__nav-link' onClick={() => handleClick('market')}>
                    <li>
                        <i className="fas fa-store"></i>
                        <span>Marketplace</span>
                    </li>
                </NavLink>
                <NavLink to='/events' className='left-side__nav-link' onClick={() => handleClick('events')}>
                    <li>
                        <i class="fas fa-calendar-week"></i>
                        <span>Events</span>
                    </li>
                </NavLink>
                <NavLink to='/memories' className='left-side__nav-link' onClick={() => handleClick('memories')}>
                    <li>
                        <i className="fas fa-history"></i>
                        <span>Memories</span>
                    </li>
                </NavLink>
            </ul>
        </div>
    )
}

export default LeftSide
