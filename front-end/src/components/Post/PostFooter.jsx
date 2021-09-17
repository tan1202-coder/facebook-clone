import React, { useContext, useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import LikePost from './LikePost'
import { UserContext } from '../../App'


function PostFooter({post}) {
    const {userState} = useContext(UserContext)

    useEffect(() => {
        filterLike()
    }, [post.likes.length])

    const filterLike = () => {
        let users = userState.currentUser.friends.filter(friend => 
            post.likes.includes(friend.id),
        )
        if (post.likes.includes(userState.currentUser.id)) {
            users.push(userState.currentUser)
        }

        return users
    }
    
    return (
        <Fragment>
            <div className="footer-left">
                <i className = 'fas fa-thumbs-up'></i>
                {filterLike().length === 0 ? 
                <span>
                    Give the first like
                </span> :
                <span>
                        <span>{filterLike()[0].name} {filterLike().length > 1 && `and ${filterLike().length - 1} other people`}</span>
                </span>
                }
            </div>
            <div className="footer-right">
                <LikePost post={post}/>
                <div className="btn-icon btn-icon-primary">
                    <i className = 'fas fa-comments'></i>
                </div>
            </div>
        </Fragment>
    )
}

export default PostFooter
