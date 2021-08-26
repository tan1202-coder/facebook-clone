import React, {useState, useEffect, useRef} from 'react'
import UseSearchFriends from '../../hooks/useSearchFriends.js'
import {Link} from 'react-router-dom'
import UseOnClickOutside from '../../hooks/useOnClickOutside'

function SearchFriends() {
    const {searchFriends, loading, friends} = UseSearchFriends();
    const ref = useRef();
    const [isOpen, setIsOpen] = useState(false);
    
    const handleInputChange = (e) => {
        searchFriends(e.target.value);
    }

    const onFocus = () => {
        setIsOpen(true);
        document.getElementById('search').classList.add('active');
    }

    UseOnClickOutside(ref, () => {
        setIsOpen(false);
        document.getElementById('search').classList.remove('active');
    })
     

    return (
        <div className = 'card-cg' id = 'search' ref = {ref}>
            <div className="input-placeholder">
                <input id = 'search-input' type="text" placeholder="Find your friends ..." onChange = {handleInputChange} required onFocus = {onFocus}/>
            </div>
            {isOpen&&(loading ? 
            <div className = 'search-friends__body'>Loading...</div> : 
            friends.length !== 0 && <div className = 'search-friends__body'>
                <ul>
                    {friends.map(friend => (
                        <Link to = {`/profile/${friend.id}`} className = 'link'>
                            <li key = {friend.id}>
                                <img src={friend.profile_pic||'logo192.png'} alt={friend.name} className = 'avatar-cg large'/>
                                <div className="item-body">
                                    <span>{friend.name}</span>
                                    <span>{friend.email}</span>
                                </div>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>)}
        </div>
    )
}

export default SearchFriends
