import React, {useState, useContext, useEffect, useRef} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {UIContext} from '../../App'
import {UserContext} from '../../App'     
import AvatarText from '../UI/AvatarText'
import NotificationMenu from './../Notification/NotificationMenu'
import SearchFriends from '../Friend/SearchFriends'
import Badge from '../UI/Badge'

function Header() {
    const {uiState, uiDispatch} = useContext(UIContext);
    const {userState, userDispatch} = useContext(UserContext);


    const handleClick = (selectingPage) => {
        uiDispatch({type: 'SET_SELECTING_PAGE', payload: selectingPage});
    }

    return (
        <div className = 'header'>
            <div className="header__wrapper side">
                <Link className = 'link header__logo' to = '/home' onClick={() => handleClick('home')}>
                    <i className="fab fa-facebook"></i>
                </Link>
                <div className="header__search">
                    {/* <i className="fas fa-search"></i> */}
                    <SearchFriends/>                    
                </div>
            </div>
            <div className="header__wrapper">
                <NavLink to = '/home' className = 'navlink'>
                    <div className={uiState.selectingPage === 'home' ? 'btn-nav active' : 'btn-nav white-secondary'} onClick = {() => handleClick('home')}>
                        <i className="fas fa-home"></i>
                        <Badge text = {10}/>
                    </div>
                </NavLink>
                <NavLink to='/friends' className = 'navlink'>
                    <div className={uiState.selectingPage === 'friends' ? 'btn-nav active' : 'btn-nav white-secondary'} onClick={() => handleClick('friends')}>
                        <i class="fas fa-user-friends"></i>
                        <Badge text = {10}/>
                    </div>
                </NavLink>
                <NavLink to='/watch' className='navlink'>
                    <div className={uiState.selectingPage === 'watch' ? 'btn-nav active' : 'btn-nav white-secondary'} onClick={() => handleClick('watch')}>
                        <i className="fas fa-tv"></i>
                        <Badge text = {10}/>
                    </div>
                </NavLink>
                <NavLink to='/market' className='navlink'>
                    <div className={uiState.selectingPage === 'market' ? 'btn-nav active' : 'btn-nav white-secondary'} onClick={() => handleClick('market')}>
                        <i class="fas fa-store"></i>
                        <Badge text = {10}/>
                    </div>
                </NavLink>
                <NavLink to='/groups' className='navlink'>
                    <div className={uiState.selectingPage === 'groups' ? 'btn-nav active' : 'btn-nav white-secondary'} onClick={() => handleClick('groups')}>
                        <i className="fas fa-users"></i>
                        <Badge text = {10}/>
                    </div>
                </NavLink>
            </div>
            <div className="header__wrapper side">
                <NavLink to= {`/profile/${userState.currentUser.id}`} className='navlink'>
                    <div className={uiState.selectingPage === 'profile' ? 'header__avatar active': 'header__avatar'} onClick={() => handleClick('profile')}>
                        <img src='logo512.png' className="avatar-cg normal"/>
                        <span>
                            Tân
                        </span>
                    </div>
                </NavLink>
                <div className= 'btn secondary circle'>
                    <i className="fas fa-bars"></i>
                </div>
                <div className='btn secondary circle'>
                    <i className="fab fa-facebook-messenger"></i>
                    <Badge text = {9}/>
                </div>
                
                <NotificationMenu/>
                
                <div className='btn secondary circle'>
                    <i class="fas fa-caret-down"></i>
                </div>
            </div>
        </div>
    )
}


export default Header
