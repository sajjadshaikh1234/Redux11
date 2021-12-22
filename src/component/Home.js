import React, { useEffect, useState } from 'react'
import { GetApide, DeleteDEtail } from "../redux/action/Action"
import { useDispatch, useSelector } from 'react-redux';
// import { unstable_batchedUpdates } from 'react-dom/cjs/react-dom.development';
import {Navbar , NavLink,Nav , Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Home = () => {
    const dispatch = useDispatch();
    const selctor = useSelector(state => state.Reducer.details)
    const isDeleteResponse = useSelector(state => state.Reducer.isDeleteResponse)

    // console.log("...............", selctor)
    useEffect(() => {
        dispatch(GetApide())
    }, [dispatch])

    if (isDeleteResponse) {
        alert("Data has been delete")
        window.location.reload(false);
    }
const [show,setShow] = useState(true)

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

                        <span className="material-icons text-danger delete_icon"  onClick={() => dispatch(DeleteDEtail(item.id))}>
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
    <Container>
    <Navbar.Brand href="#home" style={{color:"gray"}}>cruds</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/" style={{color:"blueviolet"}}>Home</Nav.Link>
      <Nav.Link href="/form" style={{color:"blueviolet"}}>addData</Nav.Link>
      <Nav.Link href="/edit/:id" style={{color:"blueviolet"}}>Updatedetail</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
            
              {
                    show?
                    <div>
                <h1 style={{color:"brown" , fontSize: "20px" , fontStyle:"oblique"}}>React-Redux crud opration </h1>
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