import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import useAuth from '../Hooks/useAuth';

import { useHistory } from 'react-router';




const Register = () => {
    const history = useHistory();
    const [email, setEmail] =  useState('');
    const [password, setPassword] =  useState('');
    const [name, setName] =  useState('');
    const [error, setError] =  useState('');
    const {updateName,signInWithGoogle,createAccount} = useAuth();

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                history.push('/home');
            })
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }
  
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6){
            setError('Password should be atleast 6 characters')

            return;
        }

        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setError('Password should have atleast two uppercase')
            return;
        }

        createAccount(email,password) 
        
            .then(result => {
                updateName(name)
                history.push('/home');
            })
            .catch(error =>{
                setError(error.message)
            })
        
            
    }

    return (
        <div className="pb-5">
             <h1 className="mt-5 d-flex justify-content-center">Ahoy, New Member!</h1>
            <p className="d-flex justify-content-center">Sign up to continue</p>    
             <form onSubmit={handleRegistration}>
             <div className="row mb-3 ">
                
                <div className="col-sm-10 mx-auto">
                    <input  type="text" onBlur={handleNameChange} placeholder="Name" className="form-control mx-auto w-50" id="inputName" required/>
                </div>
            </div>
            <div className="row mb-3 ">
                
                <div className="col-sm-10 mx-auto">
                    <input onBlur={handleEmailChange} type="email" placeholder="Enter your email address" className="form-control mx-auto w-50" id="inputEmail3" required/>
                </div>
            </div>
            <div className="row mb-3">
               
            <div className="col-sm-10 mx-auto ">
                <input onBlur={handlePasswordChange} type="password" placeholder="Password" className="form-control mx-auto w-50" id="inputPassword3" required/>
            </div>
        </div>
       
            <div className="d-flex justify-content-center">
            <span className="text-danger">{error}</span>
            </div>
   
            <p className="ms-2 d-flex justify-content-center">Already have an account? <Link to = '/login'>Login</Link> </p>
            <div className="d-flex justify-content-center">
        
            <button type="submit" className="btn button-bg mb-3">Sign up</button>
        
            </div>
            <hr />
        </form>
        <p className="d-flex justify-content-center">or</p>
           
           <div className="d-flex justify-content-center">
           <button className="button-bg rounded text-white py-2" onClick={handleGoogleSignIn}> Sign In With Google</button>
           </div>
           
        </div>
    );
};

export default Register;