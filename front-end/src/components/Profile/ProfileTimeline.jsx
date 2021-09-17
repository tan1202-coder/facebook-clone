import React, { Fragment, useContext } from 'react'
import { PostContext, UserContext } from '../../App'
import Posts from '../Post/Posts'

function ProfileTimeline({user}) {
    const { userState} = useContext(UserContext)
    const { postState } = useContext(PostContext)

    const getUserPost = () => {
        return postState.posts.filter(post => post.user.userId == user.userId) 
    }
    
    return (
        <Fragment>
            <Posts posts = {getUserPost()}/>
        </Fragment>
    )
}

export default ProfileTimeline
