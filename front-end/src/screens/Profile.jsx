import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { UserContext } from '../App'
import ProfileHeader from '../components/Profile/ProfileHeader'
import UserProfile from '../components/Profile/UserProfile';
import { fetchUserById } from "../services/UserServices"


function Profile() {
    const params = useParams()
    const { userState, userDispatch} = useContext(UserContext)
    const [user, setUser] = useState(null)

    useEffect(() => {
        if (userState.currentUser.id ==params.userId) {
            setUser(userState.currentUser)
        } else {
            let userIndex = userState.users.findIndex(u => u.id == params.userId)
            if (userIndex !== -1) {
                setUser(userState.users[userIndex])
            } else {
                fetchUserById(params.userId)
                    .then(res => {
                        if (res.data) {
                            setUser(res.data.user)
                            userDispatch({
                                type: 'ADD_USER',
                                payload: res.data.user
                            })
                        } 
                        if (res.error) {
                            console.log(res.error)
                        }
                    })
                    .catch(err => console.log(err))
                
                }
            }
        
    }, [params.userId])
    
    return (
        <div className = 'home-page'>
            {user && <UserProfile user = {user}/>}
        </div>
    )
}

export default Profile