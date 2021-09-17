import React, { Fragment, useContext, useRef, useState } from 'react'
import { useHistory } from 'react-router'
import { UserContext } from '../../App'
import useUpdateProfilePic from '../../hooks/useUpdateProfilePic'
import Dialog from '../UI/Dialog'

function UpdateProfileImage({user}) {
    const {userState} = useContext(UserContext)
    const history = useHistory()
    const [profilePic, setProfilePic] = useState(null)
    const [previewImage, setPreviewImage] = useState(null)
    const [menu, setMenu] = useState(false)

    const inputFileRef = useRef(null)

    const { updateProfilePic, loading} = useUpdateProfilePic({
        profile_pic: profilePic,
        history
    })

    const handleImageChange = (e) => {
        setProfilePic(e.target.files[0])
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onloadend = () => {
            setPreviewImage(reader.result)
            setMenu(true)
        }
    }

    const handleImageClick = () => {
        inputFileRef.current.click()
    }

    const handleUpdate = () => {
        updateProfilePic()
        handleCancel()
    }

    const handleCancel = () => {
        setProfilePic(null)
        setPreviewImage(null)
        setMenu(false)
    }
    
    // if(user.id !== userState.user.id) {
    //     return null;
    // }
    
    return (
        <Fragment>
            <div className = 'btn-icon btn-icon-default' onClick = {handleImageClick}>
                <i className = 'fas fa-camera'></i>
            </div>

            <input type="file"
                    accept = 'image/*'
                    ref = {inputFileRef}
                    onChange = {handleImageChange} />
            <Dialog isOpen = {menu}
                    onClose = {handleCancel}
                    title = 'Preview Image'
                    content = {<img src={previewImage} width = '500px'/>}
                    footer = {<button className = 'btn btn-default' onClick = {handleUpdate}>
                                    {loading ? 'Uploading...' : 'Upload'}
                            </button> }/>
        </Fragment>
    )
}

export default UpdateProfileImage
