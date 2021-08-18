import React, { useContext, useState } from 'react'
import { UserContext, UIContext } from '../App'
import { LogoutUser } from '../services/AuthService'
import { Link, useHistory } from 'react-router-dom'
import './styles/Home.scss'

function Home() {
    const history = useHistory()
    const { userState, userDispatch } = useContext(UserContext)
    const { uiState, uiDispatch } = useContext(UIContext)

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
        <div className = 'home-wrapper'>
            <button onClick = {handleUserLogout}>
                Log out
            </button>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
        </div>
    )
}

export default Home