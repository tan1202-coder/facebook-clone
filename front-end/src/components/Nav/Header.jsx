import React, {useState, useContext} from 'react'
import './styles.scss'
import {Link} from 'react-router-dom'
import {UIContext} from '../../App'      

function Header() {
    const {uiState} = useContext(UIContext);
    const [iActive, setIActive] = useState(0);

    const handleClick = (index) => {
        setIActive(index);
    }

    return (
        <div className = 'header'>
            <div className="left">
                <Link className = 'logo' to = '/home'>
                    <i className="fab fa-facebook"></i>
                </Link>
                <div className="input">
                    {/* <i className="fas fa-search"></i> */}
                    <input type="text" placeholder = "Search on Facebook"/>
                </div>
            </div>
            <div className="middle">
                <div className= {iActive === 0 ? 'div active' : 'div'} onClick = {() => handleClick(0)}>
                    <i className="fas fa-home"></i>
                    <span>
                        3
                    </span>
                </div>
                <div className={iActive === 1 ? 'div active' : 'div'} onClick={() => handleClick(1)}>
                    <i class="fas fa-user-friends"></i>
                    <span>
                        3+
                    </span>
                </div>
                <div className={iActive === 2 ? 'div active' : 'div'} onClick={() => handleClick(2)}>
                    <i className="fas fa-tv"></i>
                    <span>
                        3+
                    </span>
                </div>
                <div className={iActive === 3 ? 'div active' : 'div'} onClick={() => handleClick(3)}>
                    <i class="fas fa-store"></i>
                    <span>
                        3+
                    </span>
                </div>
                <div className={iActive === 4 ? 'div active' : 'div'} onClick={() => handleClick(4)}>
                    <i className="fas fa-users"></i>
                    <span>
                        3+
                    </span>
                </div>
            </div>
            <div className="right">
                <div className="div avatar">
                    <img src="logo192.png" alt="display-photo" className="display-photo" />
                    <span>
                        Tân
                    </span>
                </div>
                <div className="div menu">
                    <i className="fas fa-bars"></i>
                </div>
                <div className="div messages">
                    <i className="fab fa-facebook-messenger"></i>
                    <span>
                        9+
                    </span>
                </div>
                <div className="div notifications">
                    <i class="far fa-bell"></i>
                    {uiState.notifications.length !== 0 && <span>
                        {uiState.notifications.length}
                    </span>}
                </div>
                <div className="div active more">
                    <i class="fas fa-caret-down"></i>
                </div>
            </div>
        </div>
    )
}

export default Header
