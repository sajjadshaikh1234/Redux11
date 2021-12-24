import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Forms from './component/Forms';
// import UpdateDetails from './component/Edit'
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import UpdateDetails from './component/UpadateDetails';
import Login from './component/Login'

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
         
          <Route exact path="/" element={<Login /> } />
          <Route exact path='/products' element={<Home />} />
          <Route exact path='/form' element={<Forms />} />
          <Route exact path='/edit/:id' element={<UpdateDetails />} />
          {/* </Switch> */} 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
