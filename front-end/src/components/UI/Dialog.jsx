import React from 'react'

function Dialog({onClose, title, isOpen, content, avatar}) {
    if(!isOpen) return null;

    return (
        <div className = 'dialog'>
            <div className="dialog__wrapper">
                <div className="dialog__title">
                    {avatar && <img className = 'avatar-cg large' src={avatar} />}
                    <h6>{title}</h6>
                    <div className = 'btn red circle' onClick = {onClose}>
                        <i className = 'fas fa-times'></i>
                    </div>
                </div>
                <div className="dialog__content">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Dialog
