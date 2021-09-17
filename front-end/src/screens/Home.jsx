import React, { useContext, useEffect, useState } from 'react'
import { UserContext, UIContext, PostContext } from '../App'
import { LogoutUser } from '../services/AuthService'
import { Link, useHistory } from 'react-router-dom'
import NotificationFloating from '../components/Notification/NotificationFloating'
import CameraField from '../components/Post/PostForm/PostDialog/CameraField'
import FeelingsCard from '../components/Post/PostForm/PostDialog/FeelingsCard'
import LocationField from '../components/Post/PostForm/PostDialog/LocationField'
import TagUserCard from '../components/Post/PostForm/PostDialog/TagUserCard'
import PostFormCard from '../components/Post/PostForm/PostDialog/PostFormCard'
import Posts from '../components/Post/Posts'
import useFetchPost from '../hooks/useFetchPost'
import WritePostCard from '../components/Post/PostForm/WritePostCard'
import LeftSide from '../components/Nav/LeftHome'
import UpdateCoverImage from '../components/Profile/UpdateCoverImage'
import ProfileHeader from '../components/Profile/ProfileHeader'
import MyFriendLists from '../components/Friend/MyFriendLists'
import RightSide from '../components/Nav/RightHome'

function Home() {
    const history = useHistory()
    const { userState, userDispatch } = useContext(UserContext)
    const { uiState, uiDispatch } = useContext(UIContext)
    const { postState } = useContext(PostContext)

    const {fetchPosts} = useFetchPost()

    useEffect(() => {
        async function loadPosts() {
            await fetchPosts()
        }

        loadPosts()
    }, [])

    const handleUserLogout = () => {
        LogoutUser()
            .then((res) => {
                if (res.data) {
                    // userDispatch({
                    //     type: 'ADD_RECENT_ACCOUNT',
                    //     payload: res.data.account,
                    // })
                    userDispatch({ type: 'LOGOUT_USER' })
                    history.push('/')
                }
                if (res.error) {
                    uiDispatch({
                        type: 'SET_MESSAGE',
                        payload: {
                            color: 'error',
                            display: true,
                            text: res.data.error,
                        },
                    })
                }
            })
            .catch(() => {
                console.log("Something went wrong")
            })
    }
    return (
        <div className = 'home-page'>
            <LeftSide/>
            <MyFriendLists/>
            <button className = 'btn btn-default' onClick = {handleUserLogout}>
                log out
            </button>
            <WritePostCard/>
            <Posts posts = {postState.posts}/>
        </div>
    )
}

export default Home