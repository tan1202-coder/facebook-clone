import React from 'react'

function Dialog({onClose, title, isOpen, content, avatar, footer}) {
    if(!isOpen) return null;

    return (
        <div className = 'dialog'>
            <div className="card">
                <div className="card__title">
                    {avatar && <img className = 'avatar-cg large' src={avatar} />}
                    <h6>{title}</h6>
                    <div className = 'btn-icon btn-icon-exit' onClick = {onClose}>
                        <i className = 'fas fa-times'></i>
                    </div>
                </div>
                <div className="card__content">
                    {content}
                </div>
                <div className = 'card__footer'>
                    {footer}
                </div>
            </div>
        </div>
    )
}

export default Dialog
