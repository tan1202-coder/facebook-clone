import React from 'react'

function Badge({text}) {
    if (!text || text <= 0) {
        return null;
    }

    return (
        <div className = 'badge-cg'>
            <span>
                {text > 9 ? '9+' : text}
            </span>
        </div>
    )
}

export default Badge
