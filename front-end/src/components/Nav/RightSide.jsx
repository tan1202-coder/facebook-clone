import React, {useState} from 'react'


function RightSide() {
    const [friends, setFriends] = useState([{avatar: 'logo192.png', name: 'Nguyễn Văn Hiếu'},{avatar: 'logo192.png', name: 'Nguyễn Văn Chê'}]);

    return (
        <div className = "right-side">
            <div className = 'wrapper'>
                <div className="right-header">
                    <span>
                        Active friends
                    </span>
                    <div className="right">
                        <div className="call">
                            <i class="fas fa-video"></i>
                        </div>
                        <div className="search">
                            <i class="fas fa-search"></i>
                        </div>
                        <div className="more">
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                </div>
                <div className="friends">
                    <ul>
                        {friends.map((friend, index) => (
                            <li key = {index} className="friend active">
                                <img src={friend.avatar} alt="" />
                                <span>
                                    {friend.name}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className = 'wrapper'>
                <div className="right-header">
                    <span>
                        Groups
                    </span>
                    
                </div>
                <div className="friends">
                    <ul>
                        {friends.map((friend, index) => (
                            <li key={index} className="friend">
                                <img src={friend.avatar} alt="" />
                                <span>
                                    {friend.name}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RightSide
