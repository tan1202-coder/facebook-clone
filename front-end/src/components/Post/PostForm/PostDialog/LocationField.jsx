import React, {useState, Fragment} from 'react'
import Dialog from '../../../UI/Dialog';

function LocationField({body, setBody}) {
    const [open, setOpen] = useState(false);
    const [location, setLocation] = useState('');

    const handleCloseLocationField = () => {
        setBody({...body, at: location});
        setOpen(false);
    }

    const handleOpenLocationField = () => {
        setOpen(true);
    }

    const handleOnChange = (event) => {
        setLocation(event.target.value);
    }

     
    return (
        <Fragment>
            <div className="btn-icon btn-icon-default" onClick = {handleOpenLocationField}>
                <i class="far fa-map"></i>
            </div>
            <Dialog isOpen = {open}
                title = 'Add your Places'
                onClose = {handleCloseLocationField}
                content = {<Content body = {body} setBody = {setBody} handleCloseLocationField = {handleCloseLocationField} handleOnChange = {handleOnChange}/>}/>
        </Fragment>
    )
}


const Content = ({handleCloseLocationField, handleOnChange}) => {

        return (
            <Fragment>
                <form onSubmit={handleCloseLocationField}>
                    <div className="input-cg">
                        <input autoFocus placeholder = ' ' id = "location" type="text" onChange = {handleOnChange} required/>
                        <label htmlFor="location">
                            <span>
                                Location
                            </span>
                        </label>
                    </div>
                    
                    <button className = 'btn btn-default' type="submit" >
                        Add location
                    </button>  

                </form>
            </Fragment>
        )
    }

export default LocationField
