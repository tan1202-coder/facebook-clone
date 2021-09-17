import React, {useState, Fragment}from 'react'
import SignupForm from '../components/Auth/SignupForm';
import LoginForm from '../components/Auth/LoginForm'

function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div className = 'auth'>
            <div className="auth__content">
                 <h1>{isLogin ? 'Login to Facebook' : 'Sign up new account'}</h1>
            </div>
            <div className="auth__container">
                {isLogin ? (<LoginForm />) :<SignupForm/> }
                <button className="btn-icon btn-icon-primary" onClick = {()=> setIsLogin(!isLogin)}>
                    <i className = {isLogin ? 'fas fa-arrow-right' : 'fas fa-arrow-left'}></i>
                </button>
            </div>
        </div>
    )
}

export default Auth
