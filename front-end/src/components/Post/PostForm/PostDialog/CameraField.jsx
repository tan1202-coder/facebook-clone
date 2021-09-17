import React, {useRef, useContext, useState, Fragment} from 'react'
import Dialog from '../../../UI/Dialog';

function CameraField({
    setBlob,
    isImageCaptured,
    setIsImageCaptured,
    setPreviewImage,
    setPostImage,
}) {
    const videoRef = useRef();
    const canvasRef = useRef();
    const [open, setOpen] = useState(false)

    const initCamera = () => {
        navigator.mediaDevices
            .getUserMedia({video: true})
            .then((stream) => {
                videoRef.current.srcObject = stream
            })
            .catch ((error) => {
                console.log(error)
            })
    }

    const removeCameraImage = () => {
        setIsImageCaptured(false)
        initCamera()
    }

    const disableCamera = () => {
            if (videoRef.current.srcObject) {
                videoRef.current.srcObject.getVideoTracks().forEach((track) => {
                track.stop()
            })
        }
    }

    const handleOpenCameraDialog = () => {
        initCamera()
        setOpen(true)
    }

    const handleCloseCameraDialog = () => {
        disableCamera()
        setOpen(false)
    }

    const addImageToPost = () => {
        canvasRef.current.toBlob(blob => {
            setPostImage(false)
            setPreviewImage('')
            setBlob(blob)
        })

        disableCamera();
        setOpen(false)
    }

    const handleCapture = () => {
        let video = videoRef.current
        let canvas = canvasRef.current
        
        canvas.width = video.getBoundingClientRect().width
        canvas.height = video.getBoundingClientRect().height
        
        let context = canvas.getContext('2d')
        context.drawImage(video, 0, 0, canvas.width, canvas.height)
        setIsImageCaptured(true)
        disableCamera()
    }
    

    return (
        <Fragment>
            <div className="btn-icon btn-icon-default" onClick = {handleOpenCameraDialog}>
                <i className = 'fas fa-camera'></i>
            </div>
            <Dialog title = 'Click image to capture' onClose = {handleCloseCameraDialog} isOpen = {open} 
                content = {<Content videoRef = {videoRef} 
                                    canvasRef = {canvasRef}
                                    isImageCaptured = {isImageCaptured}/>}
                footer = {<Footer isImageCaptured = {isImageCaptured}
                                    removeCameraImage = {removeCameraImage}
                                    addImageToPost = {addImageToPost}
                                    handleCapture = {handleCapture}/>}/>
        </Fragment>
    )
}

const Content = ({videoRef, isImageCaptured, canvasRef}) => {
        return (
            <div className="camera-field">
                <video 
                  ref={videoRef}
                  autoPlay
                  playsInline
                  style={{display: isImageCaptured && 'none', maxHeight: '400px'}}
                  /> 

                <canvas 
                  ref={canvasRef}
                  height = '400px'
                  style = {{display: !isImageCaptured &&  'none'}}>
                </canvas>
    
                
            </div>
        )
    }

const Footer = ({isImageCaptured, removeCameraImage, addImageToPost, handleCapture}) => (
    <div className="footer-camera-field">
        {isImageCaptured ? (
            <>
                <div className="btn-icon btn-icon-primary" onClick = {removeCameraImage}>
                    <i className = 'fas fa-times'></i>
                </div>
                <div className="btn-icon btn-icon-primary" onClick = {addImageToPost}>
                    <i className = 'fas fa-check'></i>
                </div>
            </>
                        ) : (
            <div className="btn-icon btn-icon-primary" onClick = {handleCapture}>
                <i className = 'fas fa-camera'></i>
            </div>
                        )}
    </div>
)

export default CameraField
