import React, { Fragment } from 'react'

function FileField({fileRef}) {

    const handleImageClick = (event) => {
        event.preventDefault()
        fileRef.current.click()
    }

    return (
        <Fragment>
            <div className="btn white circle" onClick = {handleImageClick}>
                <i className = 'fas fa-file-image'></i>
            </div>
        </Fragment>
    )
}

export default FileField
