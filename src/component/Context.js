import React, { useContext, useState } from 'react'
import { createContext } from 'react'
// import { GlobalInfo } from '../App'
import Login from './Login'

// export const GlobalInformation = createContext()
const Context = () => {
    const {keepme} = useContext(GlobalInformation)
const[email,setEmail] = useState("");
const[password,setPassword]= useState("")

const days= localStorage.setItem("user", JSON.stringify({email,password}));
console.log("................",localStorage.setItem("user", JSON.stringify({email,password})))

    return(
        <GlobalInfo.Provider>
      <button onClick={()=>keepme(days)}>Login </button>
        </GlobalInfo.Provider>
    )
}

export default Context;