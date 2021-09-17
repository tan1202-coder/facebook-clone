import React from 'react'

function PostSubContent({post}) {
    const isContent = () => {
        return (
            post.body.feelings ||
            post.body.with.length ||
            post.body.at || 
            post.body.date
        )
    }
    

    return (
        <div className = 'post-sub-content'>
            <span>
                <b>{isContent() && post.user.name}</b>
                {post.body.feelings ? (
                <>
                    &nbsp; is feeling <b>{post.body.feelings}</b>
                </>
                ) : null}
                {post.body.with.length ? (
                <>
                    {` with `}
                    <b>
                    {post.body.with.map((u) => (
                        <span key={u.id}> &nbsp;{u.name},</span>
                    ))}
                    </b>
                </>
                ) : null}
                {post.body.at ? (
                <>
                    {` at `} <b>{post.body.at} </b>
                </>
                ) : null}
                {post.body.date ? (
                <>
                    <b>{new Date(post.body.date).toLocaleDateString()}</b>
                </>
                ) : null}
            </span>
        </div>
    )
}

export default PostSubContent
