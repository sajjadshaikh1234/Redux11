import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Forget = () => {
const navigate =  useNavigate()

    const [data,setData] = useState()


const changepasswords = (e) => {
    setData(e.target.value)
}


const changebutton =() => {
    localStorage.setItem("newpassword",data)
     navigate("/")
}

    return(
        <div>
          
          <input type="text"  placeholder="newpasword" value={data} onChange={changepasswords}  />
       <br />
          <button onClick={changebutton}>Subbmit new paasword</button>
        </div>
    )
}

export default Forget;