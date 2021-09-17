import React, { lazy, useRef, useContext, useState, Fragment } from 'react'
import EmojiPicker from 'emoji-picker-react'
import {UIContext, UserContext} from '../../../../App'
import useCreatePost from '../../hooks/useCreatePost'
import Dialog from '../../../UI/Dialog'
import CustomHeader from './CustomHeader'
import PreviewImage from './PreviewImage'
import FileField from './FileField'
import TagUserCard from './TagUserCard'
import LocationField from './LocationField'
import FeelingsCard from './FeelingsCard'
import CameraField from './CameraField'



function PostFormCard() {
    const {uiState, uiDispatch} = useContext(UIContext)

    const handleOpenDialog = () => {
            uiDispatch({type: 'SET_POST_MODEL', payload: true})
    }
    
    const handleCloseDialog = () => {
        uiDispatch({type: 'SET_POST_MODEL', payload: false})
    }

    const {userState} = useContext(UserContext)

    
    
    return (
        <Fragment>
            <div className = 'btn-icon btn-icon-default' onClick = {handleOpenDialog}>
                <i className = 'fas fa-plus'></i>
            </div>

            <Dialog isOpen = {uiState.postModel}
                onClose = {handleCloseDialog}
                title = 'Create a new post'
                content = {<Content userState = {userState}/>}>
            </Dialog>
        </Fragment>
    )
}


const Content = ({userState}) => {    
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
                    <div className="capture-image">
                        <img src={blobURL} alt="" data-c-tooltip = {`${Math.round(blob.size / 1024)}kb`} tooltip-position='top'/>
                        <div className = 'btn-icon btn-icon-exit' onClick = {removeCameraImage}>
                            <i className = 'fas fa-times'></i>
                        </div>
                    </div>
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

        return (
            <Fragment>
                <CustomHeader userState = {userState} body = {body}/>

                <div>
                    <select className = 'select select-primary' value = {postData.privacy} onChange = {handlePrivacyChange}>
                        <option value="Only me">&#xf508; Only me</option>
                        <option value="Public">&#xf57d; Public</option>
                    </select>
                </div>

                <div className = 'text-area'>
                    <textarea id="" cols="60" rows={postData.content.length / 60 + 1} placeholder = 'Now, write something'
                        value = {postData.content} onChange = {handleContentChange}/>
                </div>

                {previewImage &&<div className = 'form-post__preview-image'>
                    <PreviewImage previewImage = {previewImage}
                                removeFileImage = {removeFileImage}/>
                </div>}

                <div className = 'form-post__capture-image'>
                    {showCaptureImage()}
                </div>

                <div className = 'card__footer'>
                    <div className = 'footer-left'>
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
                    <div className = 'footer-right'>
                        <button className = 'btn btn-default' onClick = {handleSubmitPost}
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


            </Fragment>
        )
    }

export default PostFormCard
