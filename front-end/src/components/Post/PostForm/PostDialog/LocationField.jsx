import React, {useState, Fragment} from 'react'
import Dialog from '../../../UI/Dialog';

function FeelingsCard({body, setBody}) {
    const [open, setOpen] = useState(false);

    const handleCloseLocationField = () => {
        setOpen(false);
    }

    const handleOpenLocationField = () => {
        setOpen(true);
    }

    const handleOnChange = (event) => {
        setBody({...body, at: event.target.value});
    }
        

    const Content = () => {
        return (
            <div className = 'location-field'>
                <form onSubmit={handleCloseLocationField}>
                    <div className="input-cg">
                        <input placeholder = ' ' id = "location" type="text" onChange = {handleOnChange} required/>
                        <label htmlFor="location">
                            <span>
                                Location
                            </span>
                        </label>
                    </div>
                    
                    <button className = 'btn white medium outline' type="submit" >
                        Add location
                    </button>  

                </form>
            </div>
        )
    }
    
    return (
        <Fragment>
            <div className="btn white circle" onClick = {handleOpenLocationField}>
                <i class="far fa-map"></i>
            </div>
            <Dialog isOpen = {open}
                title = 'Add your Places'
                onClose = {handleCloseLocationField}
                content = {<Content />}/>
        </Fragment>
    )
}

export default FeelingsCard
