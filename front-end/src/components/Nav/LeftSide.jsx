import React from 'react'
import {Link} from 'react-router-dom'
import './styles.scss'

function LeftSide() {
    return (
        <div className = 'left-side'>
            <ul>
                <Link to = '/' className = 'none-decoration'>
                    <li>
                        <i className="fas fa-user"></i>
                        <span>Nguyễn Nhựt Tân</span>
                    </li>
                </Link>
                <Link to='/' className='none-decoration'>
                    <li>
                        <i className="fas fa-user-friends"></i>
                        <span>Friends</span>
                    </li>
                </Link>
                <Link to='/' className='none-decoration'>
                    <li>
                        <i className="fas fa-users"></i>
                        <span>Groups</span>
                    </li>
                </Link>
                <Link to='/' className='none-decoration'>
                    <li>
                        <i className="fas fa-store"></i>
                        <span>Marketplace</span>
                    </li>
                </Link>
                <Link to='/' className='none-decoration'>
                    <li>
                        <i class="fas fa-calendar-week"></i>
                        <span>Events</span>
                    </li>
                </Link>
                <Link to='/' className='none-decoration'>
                    <li>
                        <i className="fas fa-history"></i>
                        <span>Memories</span>
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default LeftSide
