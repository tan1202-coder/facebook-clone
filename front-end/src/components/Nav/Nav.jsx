import React from 'react'
import LeftSide from './LeftSide'
import MiddleMenu from './Header'
import RightSide from './RightSide'

function Nav() {
    return (
        <div>
            <MiddleMenu/>
            <RightSide/>
            <LeftSide/>
        </div>
    )
}

export default Nav
