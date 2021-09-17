import React, {useState, Fragment} from 'react'
import Dialog from '../../../UI/Dialog';
import { v4 as uuidv4 } from 'uuid';

function FeelingsCard({body, setBody}) {
    const [open, setOpen] = useState(false);
    const [fellings, setFeelings] = useState('')

    const handleCloseFeelingsCard = () => {
        setBody({...body, feelings: fellings});
        setOpen(false);
    }

    const handleOpenFeelingsCard = () => {
        setOpen(true);
    }

    const handleOnChange = (event) => {
        setFeelings(event.target.value);
    }
        
    
    return (
        <Fragment>
            <div className="btn-icon btn-icon-default" onClick = {handleOpenFeelingsCard}>
                <i class="far fa-smile-wink"></i>
            </div>
            <Dialog isOpen = {open}
                title = 'Express your feelings'
                onClose = {handleCloseFeelingsCard}
                content = {<Content handleCloseFeelingsCard = {handleCloseFeelingsCard} handleOnChange = {handleOnChange}/>}/>
        </Fragment>
    )
}

const Content = ({handleCloseFeelingsCard, handleOnChange}) => {
        return (
            <Fragment>
                <form onSubmit = {handleCloseFeelingsCard}>

                    <div className="input-cg">
                        <input autoFocus placeholder = ' ' id = "fellings" type="text" onChange = {handleOnChange} required/>
                        <label htmlFor="feelings">
                            <span>
                                Feelings
                            </span>
                        </label>
                    </div>
                    
                    <button className = 'btn btn-default' type="submit">
                        Add feelings
                    </button>  

                </form>
            </Fragment>
        )
    }

export default FeelingsCard
