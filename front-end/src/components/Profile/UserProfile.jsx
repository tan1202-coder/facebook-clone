import React, { Fragment } from 'react'
import Friends from './Friends'
import ProfileHeader from './ProfileHeader'
import ProfileTimeline from './ProfileTimeline'

function UserProfile({user}) {
    return (
        <Fragment>
            <ProfileHeader user = {user}/>
            <ProfileTimeline user = {user}/>
            {/* <Friends user = {user}/> */}
        </Fragment>
    )
}

export default UserProfile
