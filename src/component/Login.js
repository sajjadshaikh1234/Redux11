import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../App.css"

const Login = () => {

    const [username, setUserName] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate();
    // useEffect(()=> {
    //     if(localStorage.setItem('user-info')) {
    //         navigate("/")
    //     }
    // },[])

    const changeuser = (e) => {
        setUserName(e.target.value)
    }

    const changepassword = (e) => {
        setPassword(e.target.value)
    }

    const clicklogin = () => {

        // const item = { username, password }
        const result =
            fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                body: JSON.stringify({
                    username: "mor_2314",
                    password: "83r5^_"
                })
            })
                .then(res => res.json())
                .then(json => console.log(json))

        localStorage.setItem("username", username)
        localStorage.setItem("password", password)
        navigate("/products")

    }

// localStorage.getItem("username",username)
// console.log("......",username)
// localStorage.setItem("password",password)

    return (
        <div>
            <div className="col-sm-6 offset-sm-3">
                <h1>Login here</h1>
                <form className='login__form'>
                    <input type="text" placeholder='USERNAME' value={username} className='form-control' onChange={changeuser} />



                    <br /> <br />
                    <input type="text" placeholder='PASSWORD' value={password} className='form-control' onChange={changepassword} />
                    <br />
                    <button onClick={clicklogin}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;