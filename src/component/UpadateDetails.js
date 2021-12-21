import React, { useState, useEffect } from 'react';
// import { UpdateApide } from '../redux/action/Action';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
// import ClipLoader from "react-spinners/ClipLoader";
import GetDetailByHooks from '../hooks/GetDetailsByHooks'
import { PostApide, UpdatdatApide } from '../redux/action/Action';



const UpdateDetails = (props) => {
  const { id } = useParams();
  // console.log("params" , id)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isUpdateResponse = useSelector((state) => state.Reducer.isUpdateResponse);

  // console.log('isResponse is ________________', isResponse);
  const [detalibyId] = GetDetailByHooks(id)
  console.log("........detail id..............", props.detalibyId)


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');



  useEffect(() => {
    const data = () => {
      if (detalibyId.data) {
        setName(detalibyId.data.name)
        setEmail(detalibyId.data.email)
        setPhone(detalibyId.data.phone)
        setCountry(detalibyId.data.country)
      }
    }
    data()
  }, [detalibyId.data])


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
      country: country,
    };
    dispatch(UpdatdatApide(details, id));
    navigate("/")

  };
  if (isUpdateResponse) {
    alert("Your data has been Update")
  }


  return (

    <div className='forms'>

      <form>
        <div className='form-row'>
          <div className='form-group col-md-6'>
            <label htmlFor='inputName'>Name</label>
            <input
              type='text'
              className='form-control'
              id='inputName'
              placeholder='Name'
              value={name}
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
              value={email}
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
              value={phone}
              onChange={(e) => phoneHandler(e)}
            />
          </div>
          <div className='form-group col-md-6'>
            <label htmlFor='inputCountry'>Country</label>
            <input
              type='text'
              className='form-control'
              id='inputCountry'
              placeholder='Country'
              value={country}
              onChange={(e) => countryHandler(e)}
            />
          </div>
        </div>
        <div className='btn'>
          <button
            type='submit'
            className='btn btn-primary'
            onClick={(e) => {
              clickHandler(e);
            }} >
            Update
          </button>

        </div>
      </form>
    </div>
  );
};

export default UpdateDetails;