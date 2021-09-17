import React, {useState, useContext, useEffect, useRef} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {UIContext} from '../../App'
import {UserContext} from '../../App'     
import {getName} from '../../hooks/useUtils'
import NotificationMenu from './../Notification/NotificationMenu'
import SearchFriends from '../Friend/SearchFriends'
import Badge from '../UI/Badge'
import avatar from '../../assets/avatar-default.jpg'

function Header() {
    const {uiState, uiDispatch} = useContext(UIContext);
    const {userState, userDispatch} = useContext(UserContext);


    const handleClick = (selectingPage) => {
        uiDispatch({type: 'SET_SELECTING_PAGE', payload: selectingPage});
    }

    return (
        <div className = 'header'>
            <div className="header__wrapper side">
                <Link to = '/home' onClick={() => handleClick('home')}>
                    <i className="icon-cg md fab fa-facebook"></i>
                </Link>
                <div className="header__search">
                    {/* <i className="fas fa-search"></i> */}
                    <SearchFriends/>                    
                </div>
            </div>
            <div className="header__wrapper">
                <NavLink to = '/home'>
                    <div className={uiState.selectingPage === 'home' ? 'btn-nav btn-nav-default is-active' : 'btn-nav btn-nav-default'} onClick = {() => handleClick('home')}>
                        <i className="fas fa-home"></i>
                        <Badge text = {10}/>
                    </div>
                </NavLink>
                <NavLink to='/friends'>
                    <div className={uiState.selectingPage === 'friends' ? 'btn-nav btn-nav-default is-active' : 'btn-nav btn-nav-default'} onClick={() => handleClick('friends')}>
                        <i class="fas fa-user-friends"></i>
                        <Badge text = {10}/>
                    </div>
                </NavLink>
                <NavLink to='/watch'>
                    <div className={uiState.selectingPage === 'watch' ? 'btn-nav btn-nav-default is-active' : 'btn-nav btn-nav-default'} onClick={() => handleClick('watch')}>
                        <i className="fas fa-tv"></i>
                        <Badge text = {10}/>
                    </div>
                </NavLink>
                <NavLink to='/market'>
                    <div className={uiState.selectingPage === 'market' ? 'btn-nav btn-nav-default is-active' : 'btn-nav btn-nav-default'} onClick={() => handleClick('market')}>
                        <i class="fas fa-store"></i>
                        <Badge text = {10}/>
                    </div>
                </NavLink>
                <NavLink to='/groups'>
                    <div className={uiState.selectingPage === 'groups' ? 'btn-nav btn-nav-default is-active' : 'btn-nav btn-nav-default'} onClick={() => handleClick('groups')}>
                        <i className="fas fa-users"></i>
                        <Badge text = {10}/>
                    </div>
                </NavLink>
            </div>
            <div className="header__wrapper side">
                <NavLink to= {`/profile/${userState.currentUser.id}`}>
                    <div className={uiState.selectingPage === 'profile' ? 'header__avatar active': 'header__avatar'} onClick={() => handleClick('profile')}>
                        <img src={userState.currentUser.profile_pic || avatar} className="avatar-cg large"/>
                        <span>
                            {getName(userState.currentUser.name)}
                        </span>
                    </div>
                </NavLink>
                <div className= 'btn-icon btn-icon-default'>
                    <i className="fas fa-bars"></i>
                </div>
                <div className='btn-icon btn-icon-default'>
                    <i className="fab fa-facebook-messenger"></i>
                    <Badge text = {9}/>
                </div>
                
                <NotificationMenu/>
                
                <div className='btn-icon btn-icon-default'>
                    <i class="fas fa-caret-down"></i>
                </div>
            </div>
        </div>
    )
}


export default Header
