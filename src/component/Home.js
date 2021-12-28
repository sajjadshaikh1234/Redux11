import React, { useEffect, useState } from 'react'
import { GetApide, DeleteDEtail } from "../redux/action/Action"
import { useDispatch, useSelector } from 'react-redux';
// import { unstable_batchedUpdates } from 'react-dom/cjs/react-dom.development';
import { Navbar, NavLink, Nav, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import "../App.css"
import Auths from './Auths';
import { useContext } from 'react';
import { GlobalInfo } from '../App';


const Home = () => {

    const {appColor} = useContext(GlobalInfo);
    // console.log(".....",props.username)
    // localStorage.getItem('username')
    // console.log("..........")
    const dispatch = useDispatch();
    const selctor = useSelector(state => state.Reducer.details)
    const isDeleteResponse = useSelector(state => state.Reducer.isDeleteResponse)
    const navigate = useNavigate();
    // localStorage.getItem("username",props.username)
    // console.log("........",props.username)
    const changepage = () => {
        localStorage.clear();
        navigate("/")
        // if(localStorage.clear()) {
        //     navigate("/")
        // }  
    }
    // console.log("...............", selctor)
    useEffect(() => {
        dispatch(GetApide())
        console.log(localStorage.getItem("user"))
    }, [dispatch])
    const [data, setData] = useState(localStorage.getItem("user"));

    // const checking =  () => {
    //     if(data) {
    //         console.log(data)
    // localStorage.getItem("username")
    //     } 


    // }

    if (isDeleteResponse) {
        alert("Data has been delete")
        window.location.reload(false);
    }
    const [show, setShow] = useState(true)
    const result = selctor ?
        selctor.map((item, index) => {
            // console.log(".....", item)
            return (

                <tr key={index}>
                    <th scope="row"> {item.id}  </th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.country}</td>
                    <td>
                        <Link to={`/edit/${item.id}`}>
                            <span className="material-icons">
                                edit
                            </span>
                        </Link>
                    </td>
                    <td>
                        <span className="material-icons text-danger delete_icon" onClick={() => dispatch(DeleteDEtail(item.id))}>
                            delete
                        </span>
                    </td>
                    <td>
                        <Link to="/form">
                            <span class="material-icons">
                                add
                            </span>
                        </Link>
                    </td>
                </tr>
            )
        })
        : null
    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home" style={{ color: "gray" }}>cruds</Navbar.Brand>
                <Nav className="me-auto">
                    {
                        localStorage.getItem("user") ?
                            <>
                                <Nav.Link href="/products" className="logout__button" style={{ color: "blueviolet" }}>Home</Nav.Link>
                                <Nav.Link href="/form" className="logout__button" style={{ color: "blueviolet" }}>addData</Nav.Link>
                                <Nav.Link href="/edit/:id" className="logout__button" style={{ color: "blueviolet" }}>Updatedetail</Nav.Link>
                                <Nav.Link href="/" className="logout__button" onClick={changepage} >Logout</Nav.Link>
                            </>
                            :
                            <>
                                null
                            </>
                    }
                </Nav>
            </Navbar>
            {
                show ?
                    <div>
                        <h1 style={{ fontSize: "60px", fontStyle: "oblique" }}><div style={{ color: "blue" }}>welcome {data}</div>  </h1>
                        <h1 style={{color:appColor}}>Hello React</h1>
                        <Auths />
                        <table className='table table-dark'>
                            <thead>
                            <tr>
                                    <th scope='col'>Id</th>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>Phone</th>
                                    <th scope='col'>Country</th>
                                    <th scope='col'>edit</th>
                                    <th scope='col'>Delete</th>
                                    <th scope='col'>AddData</th>
                                </tr>
                            </thead>
                            <tbody>{result}</tbody>
                        </table>
                    </div>
                    :
                    null
            }
            <button onClick={() => setShow(!show)}>Toggle</button>
        </div>
    )
}

export default Home;