import React from 'react'

function PreviewImage({previewImage, removeFileImage}) {
    return (
        <div className = 'preview-image'>
            <div className = 'preview-image__img'>
                <img src={previewImage} alt="" />
                <div className = 'btn red circle' onClick = {removeFileImage}>
                    <i className = 'fas fa-times'></i>
                </div>
            </div>
        </div>
    )
}

export default PreviewImage
