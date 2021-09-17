import React, { useContext } from 'react'
import { UserContext } from '../../App'
import UpdateCoverImage from './UpdateCoverImage'
import UpdateProfileImage from './UpdateProfileImage'
import avatar from '../../assets/avatar-default.jpg'
import cover_image from '../../assets/cover-image.jpg'


function ProfileHeader({user}) {
    const {userState} = useContext(UserContext)

    const isCurrentUser = () => {
        return user.id === userState.currentUser.id
    }
    

    return (
        <div className = 'profile-header'>
            <div className="cover-pic">
                <div className="cover-pic__wrapper">
                    <img src={user.cover_image || cover_image}/>
                    {isCurrentUser() && <UpdateCoverImage user = {user}/>}
                </div>
            </div>

            <div className = 'avatar-header'>
                <div>
                    <div className = 'avatar-header__img'>
                        <img src={user.profile_pic || avatar} alt="" className = 'avatar-cg xxxlarge'/>
                        {isCurrentUser()&&<UpdateProfileImage user = {user}/>}
                    </div>

                    <div>
                        <h1>
                            {user.name}
                        </h1>
                        <span>
                            {user.friends && user.friends.length} friends
                        </span>
                    </div>
                </div>  

                   
            </div>


        </div>
    )
}

export default ProfileHeader
