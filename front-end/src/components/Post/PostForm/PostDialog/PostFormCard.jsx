import React, { lazy, useRef, useContext, useState, Fragment } from 'react'
import EmojiPicker from 'emoji-picker-react'
import {UIContext, UserContext} from '../../../../App'
import userCreatePost from '../../hooks/useOnClickOutside'
import useCreatePost from '../../hooks/useCreatePost'
import Dialog from '../../../UI/Dialog'
import CustomHeader from './CustomHeader'
import PreviewImage from './PreviewImage'
import FileField from './FileField'
import TagUserCard from './TagUserCard'
import LocationField from './LocationField'
import FeelingsCard from './FeelingsCard'

const CameraField = lazy(() => import('./CameraField'))

function PostFormCard() {
    const {uiState, uiDispatch} = useContext(UIContext)
    const [blob, setBlob] = useState(null)
    const [postImage, setPostImage] = useState(null)
    const [previewImage, setPreviewImage] = useState('')
    const [isImageCaptured, setIsImageCaptured] = useState(false)
    const [showEmoji, setShowEmoji] = useState(false)
    const [body, setBody] = useState({
        feelings: '',
        with: [],
        at: '',
        date: '',
    })

    const [postData, setPostData] = useState({
        private: 'Public',
        content: '',
    })
    const {userState} = useContext(UserContext)

    const fileRef = useRef()
    
    const handleContentChange = (e) => {
        setPostData({
            ...postData,
            content: e.target.value,
        })
    }

    const handleImageChange = (e) => {
        setPostImage(e.target.files[0])

        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            setBlob(null)
            setIsImageCaptured(false)
            setPreviewImage(reader.result)
        }
    }

    const handlePrivacyChange = (e) => {
        setPostData({...postData, privacy: e.target.value})
    }

    const onEmojiClick = (e, emojiObject) => {
        setPostData({
            ...postData,
            content: postData.content + emojiObject.emoji,
        })
    }

    const handleCloseDialog = () => {
        uiDispatch({type: 'SET_POST_MODEL', payload: false})
    }

    const handleOpenDialog = () => {
        uiDispatch({type: 'SET_POST_MODEL', payload: true})
    }
    
    const removeFileImage = () => {
        setPreviewImage('')
        setPostImage(null)
    }

    const removeCameraImage = () => {
        setBlob(null)
        setIsImageCaptured(false)
    }

    const showCaptureImage = () => {
        if(blob) {
            let blobURL = URL.createObjectURL(blob)

            return(
                <Fragment>
                    <img src={blobURL} alt="" data-c-tooltip = {`${Math.round(blob.size / 1024)}kb`}/>
                    <div className = 'btn red circle'>
                        <i className = 'fas fa-times'></i>
                    </div>
                </Fragment>
            )
        }
    }
    
    const { handleSubmitPost, loading } = useCreatePost({
        postData,
        body,
        postImage,
        isImageCaptured,
        blob,
    })

    const Content = () => {
        return (
            <div className = 'post-content'>
                <CustomHeader userState = {userState} body = {body}/>

                <div className = 'post-content__privacy'>
                    <select value = {postData.privacy} onChange = {handlePrivacyChange}>
                        <option value="Only me">Only me</option>
                        <option value="Public">Public</option>
                    </select>
                </div>

                <div className = 'post-content__mind'>
                    <textarea name="" id="" cols="30" rows="10"
                        value = {postData.content} onChange = {handleContentChange}/>
                </div>

                {previewImage &&<div className = 'post-content__preview-image'>
                    <PreviewImage previewImage = {previewImage}
                                removeFileImage = {removeFileImage}/>
                </div>}

                {showCaptureImage()}

                <div>
                    <div>
                        <FileField fileRef={fileRef} />

                        <CameraField
                        setBlob={setBlob}
                        isImageCaptured={isImageCaptured}
                        setIsImageCaptured={setIsImageCaptured}
                        setPreviewImage={setPreviewImage}
                        setPostImage={setPostImage}
                        />

                        <LocationField body={body} setBody={setBody} />
                        <FeelingsCard body={body} setBody={setBody} />
                        <TagUserCard body={body} setBody={setBody} />
                    </div>
                    <div>
                        <button className = 'btn white medium outline' onClick = {handleSubmitPost}
                                disabled = {loading}>
                            {loading? 'Loading' : 'Create Post'}
                        </button> 

                        <input type="file" 
                            ref = {fileRef}
                            onChange = {handleImageChange}
                            accept = 'image/*'
                            capture = 'user'/>
                    </div>
                </div>

            </div>
        )
    }
    
    return (
        <div>
            <div className = 'btn white circle'>
                <i className = 'fas fa-plus'></i>
            </div>

            <Dialog isOpen = {uiState.postModel}
                onClose = {handleCloseDialog}
                title = {userState.currentUser.name}
                avatar = {userState.currentUser.profile_pic}
                content = {<Content/>}
            >

            </Dialog>
        </div>
    )
}

export default PostFormCard
