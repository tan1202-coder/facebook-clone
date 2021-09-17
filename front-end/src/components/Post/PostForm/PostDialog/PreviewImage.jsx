import React, { Fragment } from 'react'

function PreviewImage({previewImage, removeFileImage}) {
    return (
        <Fragment>
            <div className = 'preview-image'>
                <img src={previewImage} alt="" />
                <div className = 'btn-icon btn-icon-exit' onClick = {removeFileImage}>
                    <i className = 'fas fa-times'></i>
                </div>
            </div>
        </Fragment>
    )
}

export default PreviewImage
