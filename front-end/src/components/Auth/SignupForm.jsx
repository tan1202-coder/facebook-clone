import React, {Fragment} from 'react'
import useSignupUser from './hooks/useSignupUser'


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
            <form onSubmit={handleSignupUser} className='form-cg'>
                <div className="input-cg">
                    <input placeholder=' ' id="name" type="text" onChange={handleNameChange} required />
                    <label htmlFor="name" className="label">
                        <span>
                            Your name
                        </span>
                    </label>
                </div>
                <div className="input-cg">
                    <input placeholder=' ' id="email" type="email" onChange={handleEmailChange} required />
                    <label htmlFor="email" className="form-label">
                        <span>
                            Email Address
                        </span>
                    </label>
                </div>
                <div className="input-cg">
                    <input placeholder=' ' id="password" className="form-input" type="password" onChange={handlePasswordChange} required />
                    <label htmlFor="password" className="form-label">
                        <span>
                            Password
                        </span>
                    </label>
                </div>
                
                    <button type="submit" className='btn medium white outline'>
                        {loading ? 'Loading...' : 'Sign up'}
                    </button>
            </form>
        </Fragment>
    )
}

export default SignupForm
