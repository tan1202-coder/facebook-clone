import React, {useState, useContext, Fragment, useRef}from 'react'
import {UIContext, UserContext} from '../../App'
import moment from 'moment'
import UseOnClickOutside from '../../hooks/useOnClickOutside'
import Badge from '../UI/Badge'

function NotificationMenu() {
    const {uiState} = useContext(UIContext);
    const [Open, setOpen] = useState(false);
    const ref = useRef();


    UseOnClickOutside(ref, () => setOpen(false));
    return (
        <div className = 'header__notification' ref={ref}>
            <div className={Open ? 'btn secondary circle active' : 'btn secondary circle'}
                onClick={() => setOpen(!Open)}
                data-c-tooltip = 'Notifications'
                tooltip-position = 'bottom'>
                <i class="far fa-bell"></i>
                <Badge text = {10}/>
            </div>
            {Open&&<div className="card-cg">
                {uiState.notifications.length === 0 ? 
                
                    <i className = 'fas fa-comment-slash'></i>
                :
            
                    <ul>
                        {uiState.notifications.map((notification) => (
                        <li key = {notification.id}>
                                <img src={notification.user.profile_pic} alt="" />
                                <div className="noti__body">
                                    <span>
                                        {notification.body}
                                    </span>
                                    <span>{moment(notification.createdAt).fromNow()}</span>
                                </div>
                        </li>
                        ))}
                    </ul>
    
                } 
            </div>
            }
        </div>
    )
}

export default NotificationMenu
