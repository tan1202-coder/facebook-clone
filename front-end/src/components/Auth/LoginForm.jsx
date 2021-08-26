import React, { Fragment } from 'react'
import useLoginUser from './hooks/useLoginUser'

const LoginForm = () => {
    const {
        loading,
        error,
        handleLoginUser,
        handlePasswordChange,
        handleEmailChange,
    } = useLoginUser()


    return (
        <Fragment>
            <form onSubmit={handleLoginUser} className = 'form-cg'>
                <div className="input-cg">
                    <input placeholder = ' ' id = "email" type="email" onChange = {handleEmailChange} required/>
                    <label htmlFor="email">
                        <span>
                            Email Address
                        </span>
                    </label>
                </div>
                <div className="input-cg">
                    <input placeholder = ' ' id="password" type="password" onChange={handlePasswordChange} required />
                    <label htmlFor="password">
                        <span>
                            Password
                        </span>
                    </label>
                </div>
                
                    <button className = 'btn white medium outline' type="submit" >
                        {loading? 'Loading...' : 'Login'}
                    </button>                
            </form>
        </Fragment>
    )
}

export default LoginForm
