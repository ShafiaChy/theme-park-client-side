import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './PrivateRoute.css'




  
const PrivateRoute = ({children, ...rest}) => {
    const {user, isLoading} = useAuth();
    if (isLoading){
        return <Spinner className="d-flex mx-auto spinner-position" animation="grow" />;
    } 
    return (
        <div>
         
           <Route
            {...rest}
            
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
        
        </div>
    );
};

export default PrivateRoute;