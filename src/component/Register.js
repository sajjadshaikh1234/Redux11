import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const changeemail = (e) => {
        setEmail(e.target.value)
    }
    const changepassword = (e) => {
        setPassword(e.target.value)
    }
    const userregis = () => {
        localStorage.setItem("users", JSON.stringify({email,password}))
        const ps = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(email.match(re) , password.match(ps)) {

navigate("/")

        }
        else {
            alert("password must 8 character length and including alphabet , number and special character")
        }
        // if (secure.match(ps)) {
        //     navigate('/')
        // }

        // else {
        //     alert("password must 8 character length and including alphabet , number and special character")
        // }
    }
    return (
        <div>
            <div className="col-sm-6 offset-sm-3">
                <h1>register page</h1>
                <form className='login__form'>
                    <input type="email" placeholder='please enter the email' value={email} className='form-control' onChange={changeemail} />
                    <input type="text" placeholder='please enter the password' value={password} className='form-control' onChange={changepassword} />
                    {
                        password.length >= 1 && password.length < 6
                            ? (
                                <p className="app" style={{ color: "red" }}>password should be minimum 6 characters</p>
                            ) : null
                    }
                    <button onClick={userregis}>Register</button>
                </form>
            </div>
        </div >
    )
}

export default Register;