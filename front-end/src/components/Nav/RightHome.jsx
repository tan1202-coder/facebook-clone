import React, {useState, useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {UserContext} from '../../App'

function RightSide() {
    const [friends, setFriends] = useState([{avatar: 'logo192.png', name: 'Nguyễn Văn Hiếu'},{avatar: 'logo192.png', name: 'Nguyễn Văn Chê'}]);

    return (
        <div className = "right-side">
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
                
                    <ul className="body">
                        {friends.map((friend, index) => (
                            <NavLink to= "#" className = 'nav-link'>
                                <li key = {index} className="body__item body__item--active">
                                    <img src={friend.avatar} alt="" className = 'avatar-cg large'/>
                                    <span>
                                        {friend.name}
                                    </span>

                                    <span className = 'avatar-cg xxsmall' style = {{background: 'green', position: 'absolute', right: '2em'}}></span>
                                </li>
                            </NavLink>
                        ))}
                    </ul>
                
            </div>
            
        </div>
    )
}

export default RightSide
