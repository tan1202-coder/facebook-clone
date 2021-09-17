import React, {useState, useContext, Fragment} from 'react'
import Dialog from '../../../UI/Dialog'
import UseSearchFriends from '../../../../hooks/useSearchFriends'

function TagUserCard({body, setBody}) {
    const [open, setOpen] = useState(false)
    

    const handleOpenTagUserCard = () => {
        setOpen(true)
    }
    
    const handleCloseTagUserCard = () => {
        setOpen(false)
    } 
    

    return (
        <Fragment>
            <div className="btn-icon btn-icon-default" onClick = {handleOpenTagUserCard}>
                <i className = 'fas fa-tags'></i>
            </div>
            <Dialog title = 'Tag your friends' onClose = {handleCloseTagUserCard} isOpen = {open} 
                    content = {<Content body = {body}
                                        setBody = {setBody}
                                        setOpen = {setOpen}/>}/>
        </Fragment>
    )
}


const Content = ({body, setBody, setOpen}) => {
        const [checked, setChecked] = useState([])

        const {searchFriends, loading, friends} = UseSearchFriends();


        const handleToggle = (value) => () => {
            const currentIndex = checked.indexOf(value)
            const newChecked = [...checked]

            if (currentIndex === -1) {
            newChecked.push(value)
            } else {
            newChecked.splice(currentIndex, 1)
            }

            setChecked(newChecked)
        }

        const handleSubmit = (event) => {
            event.preventDefault();
            
            setBody({...body, with: checked})
            setOpen(false)
        }

        const handleOnChange = (event) => {
            searchFriends(event.target.value)
        }


        return (
        <Fragment>
                <form onSubmit={handleSubmit}>
                    <div className="input-cg">
                        <input placeholder = ' ' id = "tags" type="text" onChange = {handleOnChange} required/>
                        <label htmlFor="tags">
                            <span>
                                Friends
                            </span>
                        </label>
                    </div>

                    <div className="card-cg">

                        {loading ? 
                        <div className = 'search-friends__body'>Loading...</div> : 
                        friends.length !== 0 && <div className = 'search-friends__body'>
                            <ul>
                                {friends.map(friend => (
                                        <li key = {friend.id} onClick={handleToggle(friend.id)}>
                                            <img src={checked.indexOf(friend.id) !== -1 ? friend.profile_pic : 'logo192.png'} alt={friend.name} className = 'avatar-cg large'/>
                                            <div className="item-body">
                                                <span>{friend.name}</span>
                                                <span>{friend.email}</span>
                                            </div>
                                        </li>
                                ))}
                            </ul>
                        </div>}

                    </div>
                    
                    <button className = 'btn btn-default' type="submit" >
                        Tag friends
                    </button>  

                </form>
            </Fragment>
        )
    }
    

export default TagUserCard
