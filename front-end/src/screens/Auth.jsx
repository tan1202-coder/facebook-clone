import React, {useState, Fragment}from 'react'
import SignupForm from '../components/Auth/SignupForm';
import LoginForm from '../components/Auth/LoginForm'
import './styles/Auth.scss'


function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <Fragment>
            <div className="header-container">
                 <h1 className="header">{isLogin ? 'Login to Facebook' : 'Sign up new account'}</h1>
            </div>
            <div className="auth-container">
                {isLogin ? (<LoginForm />) :<SignupForm/> }
                <button className="auth-button" onClick = {()=> setIsLogin(!isLogin)}>
                    <i className = {isLogin ? 'fas fa-arrow-right' : 'fas fa-arrow-left'}></i>
                </button>
            </div>
        </Fragment>
    )
}

export default Auth
