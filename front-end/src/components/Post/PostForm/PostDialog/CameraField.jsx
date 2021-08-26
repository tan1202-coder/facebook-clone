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

    const Content = () => {
        return (
            <div className="camera-field">
                <video 
                  ref={videoRef}
                  autoPlay
                  playsInline
                  style={isImageCaptured && {display: 'none'}}
                  /> 

                <canvas 
                  ref={canvasRef}
                  height = '425'
                  style = {!isImageCaptured && {display: 'none'}}>
                </canvas>
    
                <div className="camera-field__btn">
                    {isImageCaptured ? (
                        <>
                            <div className="btn white circle" onClick = {removeCameraImage}>
                                <i className = 'fas fa-times'></i>
                            </div>
                            <div className="btn white circle" onClick = {addImageToPost}>
                                <i className = 'fas fa-check'></i>
                            </div>
                        </>
                    ) : (
                        <div className="btn secondary circle" onClick = {handleCapture}>
                            <i className = 'fas fa-camera'></i>
                        </div>
                    )}
                </div>
            </div>
        )
    }
    

    return (
        <Fragment>
            <div className="btn white circle" onClick = {handleOpenCameraDialog}>
                <i className = 'fas fa-camera'></i>
            </div>
            <Dialog title = 'Click image to capture' onClose = {handleCloseCameraDialog} isOpen = {open} content = {<Content/>}/>
        </Fragment>
    )
}

export default CameraField
