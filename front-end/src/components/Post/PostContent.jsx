import React, {useContext, Fragment} from 'react'
import {UIContext} from '../../App'
import PostSubContent from './PostSubContent'

function PostContent({post}) {
    const {uiState} = useContext(UIContext)
    function isContent() {
        return (
            post.body.feelings ||
            post.body.with.length ||
            post.body.at ||
            post.body.date
        )
    }
    return (
        <Fragment>
            {isContent() && <PostSubContent post={post}/>}

            <div className = 'post-content__content'>
                <p>
                    {post.content&&post.content}
                </p>
            </div>

            {post.image && <div className = 'post-content__image'>
                <img src={post.image} />
                
                </div>}

            {/* {Object.keys(post.profilePostData).length &&
            <Fragment>
                <div className = 'post-content__image'>
                    <img src={post.profilePostData.coverImage} alt = {post.user.name}/> 
                </div>
                <div className = 'post-content__image'>
                    <img src={post.profilePostData.profileImage} alt = {post.user.name}/> 
                </div>
            </Fragment>} */}
        </Fragment>
    )
}

export default PostContent
