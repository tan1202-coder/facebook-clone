import React, { useContext } from 'react'
import { UIContext } from '../../App'
import moment from 'moment'
import PostContent from './PostContent'
import PostFooter from './PostFooter'
import {Link, NavLink} from 'react-router-dom'

function Post({post}) {
    const { uiState } = useContext(UIContext)

    return (
            <div className="card card-post">

                <div className="card__title">
                    <div>
                        <Link to = {`/profile/${post.user.id}`}>
                            {post.user && <img className = 'avatar-cg large' src={post.user.profile_pic || 'logo192.png'} />}
                        </Link>
                        <div>
                            <h6>{post.user.name}</h6>
                            <span>{moment(post.createdAt).fromNow()}</span>
                        </div>
                    </div>

                    <div className = 'btn-icon btn-icon-exit'>
                        <i className = 'fas fa-ellipsis-v'></i>
                    </div>
                </div>

                <div className="card__content">
                    <PostContent post={post}/>
                </div>

                <div className="card__footer">
                    <PostFooter post={post}/>
                </div>
                
            </div>
    )
}

export default Post
