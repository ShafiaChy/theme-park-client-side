import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { useLocation, useHistory } from "react-router-dom";




const Login = () => {
    
    const [email, setEmail] =  useState('');
    const [password, setPassword] =  useState('');
    const [error, setError] =  useState('');
    const {signInWithGoogle,loginWithEmailAndPassword} = useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirect_uri = location.state?.from || '/home';
     

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
          const password=e.target.value;
          if(password<6){
              setError("must be at least 6")
              return;
          }
          setPassword(password);
        }
       
    const handleEmailAndPasswordSignIn = e => {
        e.preventDefault();
        loginWithEmailAndPassword(email,password)
        .then(result => {
           
            history.push(redirect_uri);
        })
        .catch(error =>{
         
        if(error.code === 'auth/wrong-password'){
            setError('Wrong password')
        }
        if(error.code === 'auth/user-not-found'){
            setError('Wrong email address')
        }
       
         
        })
        
    }
    return (
        <div className="pb-5">
            
        <h1 className="mt-5 d-flex justify-content-center">Welcome Back!</h1>
        <p className="d-flex justify-content-center">Sign in to continue</p>  

        <form onSubmit={handleEmailAndPasswordSignIn}>
        <div className="row mb-3 ">
            
            <div className="col-sm-10 mx-auto">
                <input  type="email" onBlur={handleEmailChange} placeholder="Enter your email address" className="form-control mx-auto w-50" id="inputEmail3" required/>
            </div>
        </div>
        <div className="row mb-3">
            
        <div className="col-sm-10 mx-auto">
            <input type="password" onBlur={handlePasswordChange}  placeholder="password" className="form-control mx-auto w-50" id="inputPassword3" required/>
        </div>
    </div>
    <div className="d-flex justify-content-center">
        <span className="text-danger">{error}</span>
    </div>
    <p className="d-flex justify-content-center">Don't have an account? <Link to = '/register'> Register</Link> </p>
   <div className="d-flex justify-content-center">
   <button type="submit" className="btn button-bg mb-3">Sign in</button>
   </div>
    <hr />
    </form>
     
       <p className="d-flex justify-content-center">or</p>
       
     <div className="d-flex justify-content-center">
        <button className="button-bg rounded text-white py-2 d-flex justify-content-center" onClick={handleGoogleSignIn}> Sign In With Google</button>
     </div>
     
</div>
    );
};

export default Login;