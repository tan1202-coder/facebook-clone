import React from 'react'

function AvatarText({text, size = '32px', fontSize = '24px', bg = 'pink'}) {
    return (
        <div className = 'avatar' style = {{height: size, width: size, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%'}}>
            <span className="avatar__text" style = {{fontSize: fontSize, fontWeight: '900', color: 'black', background: 'transparent'}}>
                {text.split(' ')[0]}
            </span>
        </div>
    )
}

export default AvatarText
