import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../App.css"
import { Link } from 'react-router-dom'
// import { css } from "@emotion/react";
// import Loader from "react-loader-spinner";
// import Loaders from './Loaders';
// import Home from './Home';
import Auths from './Auths'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [loading, setLoading] = useState(false);
    // const [color, setColor] = useState("#ffffff");
    // const [show, setShow] = useState(false);

    const navigate = useNavigate();
    // useEffect(()=> {
    //     if(localStorage.setItem('user-info')) {
    //         navigate("/")
    //     }
    // },[])

    // useEffect(() => {
    //     if (loading) {
    //         setTimeout(() => {
    //             //   setLoading(true);
    //             navigate("/products")
    //         }, 2000);
    //     }

    // }, [loading]);

    // if (loading) return <Loader />
    // console.log("........................", loading)

    const changeuser = (e) => {
        setEmail(e.target.value)
    }

    const changepassword = (e) => {
        setPassword(e.target.value)
    }

// const [loogedin,setLoggedin] = useState({
//     email:"Sajjadshaikh@gmail.com",
//     password:"Sajjad123"
// })
    const clicklogin = () => {

        // const result =
        //     fetch('https://fakestoreapi.com/auth/login', {
        //         method: 'POST',
        //         body: JSON.stringify({
        //             username: "mor_2314",
        //             password: "83r5^_"
        //         })
        //     })
        //         .then(res => res.json())
        //         .then(json => console.log(json))

        localStorage.setItem("user",JSON.stringify({email,password}))
        //  localStorage.setItem("email",email)
        //  localStorage.setItem("password",password)
            //  navigate("/form")
// if(localStorage.getItem("users"))
// console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",localStorage.getItem("users"))
// {
//     navigate("/products")
// }
        // setTimeout(() => {
        //     setLoading(!loading)
        // })

        // setShow(!show);

        const ps = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (email.match(re), password.match(ps)) {
            navigate("/products")
        }
        else {
            alert("password must 8 character length and including alphabet , number and special character")
        }


    }

    return (

        <div style={{ backgroundColor: "silver" }}>

            <div className="col-sm-6 offset-sm-3">
                <h1>Login here</h1>
                <form className='login__form'>

                    <input type="email" placeholder='please enter the email' value={email} className='form-control' onChange={changeuser} />

                    <input type="password" placeholder='please enter the password' value={password} className='form-control' onChange={changepassword} />

                   


                    {
                        password.length >= 1 && password.length < 8

                            ? (

                                <p className="app" style={{ color: "red" }}>password should be minimum 8 characters</p>

                            ) : null
                    }
                    {/* 
                    <div> */}
                    {/* {!show && <button onClick={clicklogin}>Login </button>} */}
                    {/* {show && <Home />} */}
                    {/* </div> */}
                    <button onClick={clicklogin}>Login </button>
                </form>
                <Link to="/forget   ">
                    <p className="text-orange">Forgot password</p>
                </Link>
                <Link to="/register">
                    <p className="text-orange">register</p>
                </Link>
            </div>
            {/* <div className="sweet-loading"> s
<button onClick={() => setLoading(!loading)}></button>
<input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />

<ClipLoader color={color} loading={loading}  size={150} />
</div> */}
        </div>
    )
}


export default Login;

