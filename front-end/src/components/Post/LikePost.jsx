import React, { Fragment, useContext } from 'react'
import { PostContext, UIContext, UserContext } from '../../App'
import { likeDislikePost } from '../../services/PostServices'


function LikePost({post}) {
    const {postDispatch} = useContext(PostContext)
    const {userState} = useContext(UserContext)
    const {uiDispatch} = useContext(UIContext)

    const isLiked = () => {
        return post.likes.includes(userState.currentUser.id)
    }

    const handleLike = () => {
        likeDislikePost(post.id)
        .then((res) => {
            if(res.data) {
                postDispatch({
                    type: 'LIKE_UNLIKE_POST',
                    payload: res.data.post,
                })

                uiDispatch({
                    type: 'SET_MESSAGE',
                    payload: {
                        color: 'success',
                        text: res.data.message,
                        display: true,
                    }
                })
            }

            if(res.error) {
                uiDispatch({
                    type: 'SET_MESSAGE',
                    payload: {
                    color: 'error',
                    text: res.data.error,
                    display: true,
                    },
                })
            }
        })
        .catch((err) => console.log(err))
    }
    
    
    return (
        <div className = {isLiked() ? 'btn-icon btn-icon-primary is-active': 'btn-icon btn-icon-primary'} onClick = {handleLike}>
                <i className = 'fas fa-thumbs-up'></i>
        </div>
    )
}

export default LikePost
