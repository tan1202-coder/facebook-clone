import React, { useContext } from 'react'
import { UIContext, UserContext} from '../../../App'
import PostFormCard from './PostDialog/PostFormCard'

function WritePostCard() {
    const {userState} = useContext(UserContext)
    return (
        <div className = 'card card-post'>
            <div className = 'card__footer'>
               <div className = 'footer-left'>
                    <img className = 'avatar-cg large' src={userState.currentUser.profile_pic || 'logo192.png'} />
                    
                    <p> Write somethings, {userState.currentUser.name}</p>
                    
                </div>
                <PostFormCard/> 
            </div>
        </div>
    )
}

export default WritePostCard
