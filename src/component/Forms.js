import React, { useState, useEffect , useMemo} from 'react';
import { PostApide } from '../redux/action/Action';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import {  useNavigate } from 'react-router-dom';
import {Navbar , NavLink,Nav , Container} from 'react-bootstrap'
import Select from 'react-select'
import countryList from 'react-select-country-list'


const Forms = () => {
  const [show, setShow] = useState(true)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isResponse = useSelector((state) => state.Reducer.isResponse);

  console.log('isResponse is ________________', isResponse);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [value, setValue] = useState('')

  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }


  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };

  const countryHandler = (e) => {
    setCountry(e.target.value);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    const details = {
      name: name,
      email: email,
      phone: phone,
      country: value.label,
     value:value
    };
    dispatch(PostApide(details));
    navigate("/products")

  };

  //   if (isResponse) {
  //     // alert('Your data has been submitted successfully');
  //   }



  return (
    <div className='forms'>

<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home" style={{color:"gray"}}>cruds</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/products" style={{color:"blueviolet"}}>Home</Nav.Link>
      {/* <Nav.Link href="/form" style={{color:"blueviolet"}}>addData</Nav.Link> */}
      <Nav.Link href="/edit/:id" style={{color:"blueviolet"}}>Updatedetail</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

      <button onClick={() => setShow(!show)}>Toogle</button>
      {
        show ?
          <form>
            <div className='form-row'>
              <div className='form-group col-md-6'>
                <label htmlFor='inputName'>Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='inputName'
                  placeholder='Name'
                  onChange={(e) => nameHandler(e)}
                />
              </div>
              <div className='form-group col-md-6'>
                <label htmlFor='inputEmail'>Email</label>
                <input
                  type='email'
                  className='form-control'
                  id='inputEmail'
                  placeholder='Email'
                  onChange={(e) => emailHandler(e)}
                />
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col-md-6'>
                <label htmlFor='inputEmail4'>Phone</label>
                <input
                  type='text'
                  className='form-control'
                  id='inputEmail4'
                  placeholder='Phone'
                  onChange={(e) => phoneHandler(e)}
                />
              </div>
              <div className='form-group col-md-6'>
                <label htmlFor='inputCountry'>Country</label>
                 <Select options={options} value={value}  onChange={changeHandler} />
                  {/* <input
                    type='text'
                    className='form-control'
                    id='inputCountry'
                    placeholder='Country'
                    onChange={(e) => countryHandler(e)}

                  /> */}
              </div>
            </div>
            <div className='btn'>
              <button
                type='submit'
                className='btn btn-primary'
                onClick={(e) => {
                  clickHandler(e);
                }}
              >
                Add Edit Data
              </button>

            </div>
          </form>
          :

          null
      }


    </div>
  );
};

export default Forms;