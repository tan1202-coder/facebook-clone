import React, { useContext, Fragment } from 'react'
import { PostContext } from '../../App'
import useFetchPost from '../../hooks/useFetchPost'
import Post from './Post'

function Posts({posts}) {

    const { postState } = useContext(PostContext)

    const { fetchPosts } = useFetchPost()

    const handleFetchPosts = () => {
        fetchPosts()
    }

    return (
        <Fragment>
            {posts && posts.map((post) => (
                <Post post={post} key = {post.id} />
            ))}

            <div className="posts__state">
                {postState.postPagination.totalPage <=
                postState.postPagination.currentPage ? 
                <span>
                    No more posts
                </span> : 
                <button className = 'btn white medium outline' onClick={handleFetchPosts}>
                    More posts
                </button>}
            </div>
        </Fragment>
    )
}

export default Posts
