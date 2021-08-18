import React, {Fragment} from 'react'
import useSignupUser from './hooks/useSignupUser'
import './styles.scss'

function SignupForm() {

    const {
        loading,
        error,
        handleSignupUser,
        handleNameChange,
        handlePasswordChange,
        handleEmailChange,
    } = useSignupUser();

    return (
        <Fragment>
            <form onSubmit={handleSignupUser} className='form-field'>
                <div className="form-control">
                    <input placeholder=' ' id="name" className="form-input" type="text" onChange={handleNameChange} required />
                    <label htmlFor="name" className="form-label">
                        <span>
                            Your name
                        </span>
                    </label>
                </div>
                <div className="form-control">
                    <input placeholder=' ' id="email" className="form-input" type="email" onChange={handleEmailChange} required />
                    <label htmlFor="email" className="form-label">
                        <span>
                            Email Address
                        </span>
                    </label>
                </div>
                <div className="form-control">
                    <input placeholder=' ' id="password" className="form-input" type="password" onChange={handlePasswordChange} required />
                    <label htmlFor="password" className="form-label">
                        <span>
                            Password
                        </span>
                    </label>
                </div>
                
                    <button type="submit" className='submit-button'>
                        {loading ? 'Loading...' : 'Sign up'}
                    </button>
            </form>
        </Fragment>
    )
}

export default SignupForm
