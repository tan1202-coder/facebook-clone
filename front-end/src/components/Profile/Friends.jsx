import React from 'react'

function Friends({user}) {
    return (
        <div className="grid two-column left-side">
            {user.friends && user.friends.map((friend) => (
                <div key={friend.id} className = 'card'>
                    <div className="card__title">
                    <div>
                        <img className = 'avatar-cg large' src={friend.profile_pic || 'logo192.png'} />
                        <div>
                            <h6>{friend.name}</h6>
                            <span>{friend.email}</span>
                        </div>
                    </div>  

                    <div className = 'btn-icon btn-icon-default'>
                        <i className = 'fas fa-ellipsis-v'></i>
                    </div>
                </div>
                </div>
            ))}
        </div>
    )
}

export default Friends
