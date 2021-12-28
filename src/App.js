import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Forms from './component/Forms';
// import UpdateDetails from './component/Edit'
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import UpdateDetails from './component/UpadateDetails';
import Login from './component/Login'
import Forget from './component/Forgot';
import Protec from './component/PrivateRoute';
import {PrivateRoute, ProtectedRoute} from './component/PrivateRoute';
import Register from './component/Register';
import {createContext , useState} from 'react'
import Auths from './component/Auths';

export const GlobalInfo = createContext();


function App() {
  const [color,setColor] = useState("red")
  return (
    <GlobalInfo.Provider value={{appColor:color}}>
    <div className="App">
{/* <Auths  /> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Login /> } />
          {/* <Route exact path='/products'  element={<Protec Cmp={Home} 
 />} /> */}
 <Route exact path='/products' element={<PrivateRoute/>}>
   
            <Route exact path='/products' element={<Home/>}/>
          </Route>
          <Route exact path='/products' element={<ProtectedRoute isprotected={true} />}></Route>

          <Route exact path='/form' element={<Forms />} />
          <Route exact path='/edit/:id' element={<UpdateDetails />} />
          <Route exact path="/forget" element={<Forget />} /> 
          {/* <Cmp /> */}
          {/* <Register /> */}
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
    </GlobalInfo.Provider>
  );
}

// element={<Protec Cmp={AddProduct}
export default App;

