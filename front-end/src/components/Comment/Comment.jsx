import React, { useContext } from 'react'
import {UIContext, UserContext, PostContext} from '../../App'
import { likeDislikeComment } from '../../services/PostServices'
import avatar from '../../assets/avatar-default'


function Comment({comment}) {

    const {postDispatch} = useContext(PostContext)
    const {userState} = useContext(UserContext)
    const {uiState, uiDispatch} = useContext(UIContext)

    const handleLikeComment = () => {
        likeDislikeComment(comment.id)
            .then((res) => {
                if (res.data) {
                    postDispatch({
                        type: 'LIKE_UNLIKE_COMMENT',
                        payload: res.data.comment
                    })
                    uiDispatch({
                        type: 'SET_MESSAGE',
                        payload: {
                            color: 'success',
                            text: res.data.message,
                            display: true
                        }
                    })
                }
            })
    }

    const isLiked = () => {
        return comment.likes.includes(userState.currentUser.id)
    }
    
    const listItems = () => {
        <div>
            <img src={comment.user.profile_pic || avatar} alt="" className = "avatar-cg large" />
        </div>
    }
    
    
    return (
        <div>
            
        </div>
    )
}

export default Comment
