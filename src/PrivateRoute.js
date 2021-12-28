import React from 'react'
import {  useNavigate } from 'react-router-dom';

const PrivateRoute = () => {
    const navigate = useNavigate()
    return(
        <div>
           {
               (localStorage.getItem('username')) ? 
               
               navigate("/produts") :
               navigate("/")
           }
        </div>
    )
}

export default PrivateRoute;