import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../App.css"
import { Link } from 'react-router-dom'

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


        if (username.length >= 3 && password.length >= 6) {


            navigate('/products')
        } else {

            alert("JAAAG JA MAMU")
           
            navigate('/')
        }

    }

    // localStorage.getItem("username",username)
    // console.log("......",username)
    // localStorage.setItem("password",password)


    return (
        <div style={{backgroundColor:"silver"}}>
            <div className="col-sm-6 offset-sm-3">
                <h1>Login here</h1>
                <form className='login__form'>
                    <input type="text" placeholder='please enter the username' value={username} className='form-control' onChange={changeuser} />
                   

                    <input type="text" placeholder='please enter the password' value={password} className='form-control' onChange={changepassword} />
                    <button onClick={clicklogin}>Login</button>
                    {/* {
                        
                        username.length >= 1 && username.length < 3 ? (
                            <p className="app">username should be minimum 4 characters</p>
                            ) : null
                        } */}

                        </form>
                        <Link to="/forget   ">
                  <p className="text-orange">Forgot password</p>
                </Link>
                    </div>
                </div>

)
}

export default Login;

                 