import React, { useEffect } from 'react'
import { GetApide, DeleteDEtail } from "../redux/action/Action"
import { useDispatch, useSelector } from 'react-redux';
// import { unstable_batchedUpdates } from 'react-dom/cjs/react-dom.development';
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

                        <span className="material-icons text-danger" onClick={() => dispatch(DeleteDEtail(item.id))}>
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
            <Link to="/" className="nav-link">Home</Link>
            {/* <Link to="/form" className="nav-link">form</Link> */}

            <h1>hiii...........,</h1>
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
    )
}

export default Home;