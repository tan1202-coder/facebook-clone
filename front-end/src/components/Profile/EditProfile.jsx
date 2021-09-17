import React, { Fragment, useState, useContext } from 'react'
import Dialog from '../UI/Dialog'
import {UserContext} from '../../App'
import avatar from '../../assets/avatar-default.jpg'

function EditProfile() {
    const [isOpen, setIsOpen] = useState(false)
    const {userState} = useContext(UserContext)

    const onClose = () => {
        setIsOpen(false)
    }

    const handleClick = () => {
        setIsOpen(true)
    }
    
    

    return (
        <Fragment>
            <button className = 'btn btn-default' onClick = {handleClick}>
                        Update profile
            </button>

            <Dialog isOpen = {isOpen} onClose = {onClose}
                    title = 'Edit profile'
                    content = {<Content/>}
                    footer  = {<Footer/>}/>
        </Fragment>
    )
}

const Content = () => {
    
}

const Footer = () => {

}

export default EditProfile
