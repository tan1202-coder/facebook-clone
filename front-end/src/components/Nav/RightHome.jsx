import React, {useState, useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {UserContext} from '../../App'
import '../styles/RightSide.scss'

function RightSide() {
    const [friends, setFriends] = useState([{avatar: 'logo192.png', name: 'Nguyễn Văn Hiếu'},{avatar: 'logo192.png', name: 'Nguyễn Văn Chê'}]);

    return (
        <div className = "right-side">
            <div className = 'wrapper'>
                <div className="header">
                    <span className = 'header__left'>
                        Active friends
                    </span>
                    <div className="right">
                        <div className="right__item">
                            <i class="fas fa-video"></i>
                        </div>
                        <div className="right__item">
                            <i class="fas fa-search"></i>
                        </div>
                        <div className="right__item">
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                </div>
                
                    <ul className="body">
                        {friends.map((friend, index) => (
                            <NavLink to= "#" className = 'nav-link'>
                                <li key = {index} className="body__item body__item--active">
                                    <img src={friend.avatar} alt="" />
                                    <span>
                                        {friend.name}
                                    </span>
                                </li>
                            </NavLink>
                        ))}
                    </ul>
                
            </div>
            <div className = 'wrapper'>
                <div className="header">
                    <span className = 'header__left'>
                        Groups
                    </span>
                    
                </div>
          
                    <ul className = 'body'>
                        {friends.map((friend, index) => (
                            <li key={index} className="body__item">
                                <img src={friend.avatar} alt="" />
                                <span>
                                    {friend.name}
                                </span>
                            </li>
                        ))}
                    </ul>
                
            </div>
        </div>
    )
}

export default RightSide
