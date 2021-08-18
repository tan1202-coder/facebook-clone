import React, { Fragment } from 'react'
import useLoginUser from './hooks/useLoginUser'
import './styles.scss'
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
            <form onSubmit={handleLoginUser} className = 'form-field'>
                <div className="form-control">
                    <input placeholder = ' ' id = "email" className = "form-input" type="email" onChange = {handleEmailChange} required/>
                    <label htmlFor="email" className = "form-label">
                        <span>
                            Email Address
                        </span>
                    </label>
                </div>
                <div className="form-control">
                    <input placeholder = ' ' id="password" className="form-input" type="password" onChange={handlePasswordChange} required />
                    <label htmlFor="password" className="form-label">
                        <span>
                            Password
                        </span>
                    </label>
                </div>
                
                    <button type="submit" className = {error ? 'error' : ''}>
                        {loading? 'Loading...' : 'Login'}
                    </button>                
            </form>
        </Fragment>
    )
}

export default LoginForm
