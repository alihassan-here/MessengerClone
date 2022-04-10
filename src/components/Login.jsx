import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import "firebase/app";
import { authentication } from '../firebase';

const Login = () => {
    return (
        <div id='login-page'>
            <div id="login-card">
                <h2>Welcome to UniChat!</h2>
                <div className="login-button google"
                    onClick={() => authentication.signInWithRedirect(new authentication.GoogleAuthProvider())}
                >
                    <GoogleOutlined /> Sign In with Google
                </div>
                <br />
                <br />
                <div className="login-button facebook"
                    onClick={() => authentication.signInWithRedirect(new authentication.FacebookAuthProvider())}
                >
                    <FacebookOutlined /> Sign In with Facebook
                </div>
            </div>
        </div>
    );
}

export default Login