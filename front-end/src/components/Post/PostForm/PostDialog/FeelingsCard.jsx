import React, {useState, Fragment} from 'react'
import Dialog from '../../../UI/Dialog';

function FeelingsCard({body, setBody}) {
    const [open, setOpen] = useState(false);

    const handleCloseFeelingsCard = () => {
        setOpen(false);
    }

    const handleOpenFeelingsCard = () => {
        setOpen(true);
    }

    const handleOnChange = (event) => {
        setBody({...body, feelings: event.target.value});
    }
        

    const Content = () => {
        return (
            <div className = 'feelings-card'>
                <form onSubmit={handleCloseFeelingsCard}>
                    <div className="input-cg">
                        <input placeholder = ' ' id = "fellings" type="text" onChange = {handleOnChange} required/>
                        <label htmlFor="feelings">
                            <span>
                                Feelings
                            </span>
                        </label>
                    </div>
                    
                    <button className = 'btn white medium outline' type="submit" >
                        Add feelings
                    </button>  

                </form>
            </div>
        )
    }
    
    return (
        <Fragment>
            <div className="btn white circle" onClick = {handleOpenFeelingsCard}>
                <i class="far fa-smile-wink"></i>
            </div>
            <Dialog isOpen = {open}
                title = 'Express your feelings'
                onClose = {handleCloseFeelingsCard}
                content = {<Content />}/>
        </Fragment>
    )
}

export default FeelingsCard
