/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-fragments */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { EMAIL_REQUIRED, EMAIL_VALID, PASSWORD_REQUIRED } from '../../../constants/errorConstants';
import { login } from '../../../store/actions/auth/auth';
import buttonIcon from '../../../assets/images/button_icon.svg';
import Icon from '../../../assets/images/icon.png';
import { authErrorMsgReset } from '../../../store/actions';

const Login = () => {
  const dispatch = useDispatch();
  const { errorMsg } = useSelector(state => state.auth);
  const validationSchema = Yup.object({
    isEmail: Yup.boolean(),
    email: Yup.string()
      .when('isEmail', {
        is: true,
        then: Yup.string().email().typeError(EMAIL_VALID),
      })
      .required(EMAIL_REQUIRED)
      // .trim('Blank space not allowed')
      .matches(
        /^[A-Z0-9._%+-]+[A-Z]+[A-Z0-9._%+-]*@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        'Invalid email format',
      ),

    password: Yup.string().required(PASSWORD_REQUIRED),
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //   'Must contain minumum 8 characters, 1 uppercase, 1 lowercase, 1 number and one special character',
    // ),
  });

  const submitBtnHandler = values => {
    const requestBody = { ...values };
    dispatch(login({ data: requestBody }));
  };
  // const errorMessage = useSelector(state => state.auth);
  useEffect(() => {
    dispatch(authErrorMsgReset());
  }, []);
  return (
    <React.Fragment>
      <header>
        <div className="header-content">
          <div className="container-fluid">
            <div className="container">
              <div className="top-img text-center">
                <img src={Icon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="container-fluid">
          <div className="container">
            <div className="main-content mt-95">
              <div className="main-content-title">
                <h1 className="text-center">Log In</h1>
              </div>
              <div className="main-content-form">
                <Formik
                  initialValues={{
                    email: '',
                    password: '',
                    isEmail: true,
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    validationSchema.validate(values);
                    submitBtnHandler(values);
                    setSubmitting(false);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    setFieldValue,
                    handleSubmit,
                  }) => (
                    <form onSubmit={handleSubmit} noValidate>
                      <div className="input-field">
                        <input
                          type="text"
                          id="email"
                          className="input-box"
                          autoComplete="off"
                          value={values.email}
                          required
                          onChange={e => {
                            // eslint-disable-next-line no-restricted-globals
                            if (isNaN(e.target.value)) {
                              setFieldValue('isEmail', true);
                            } else {
                              setFieldValue('isEmail', false);
                            }
                            handleChange(e);
                          }}
                          onBlur={e => {
                            // eslint-disable-next-line no-restricted-globals
                            if (isNaN(e.target.value)) {
                              setFieldValue('isEmail', true);
                            } else {
                              setFieldValue('isEmail', false);
                            }
                            handleBlur(e);
                          }}
                        />
                        <label htmlFor="email">Email Address</label>
                        <div className="error-message">
                          {errors.email && touched.email && errors.email}
                        </div>
                      </div>
                      <div className="input-field mt-2">
                        <input
                          type="password"
                          id="password"
                          className="input-box"
                          value={values.password}
                          required
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <label htmlFor="password">Password</label>
                        <div className="error-message">
                          {errors.password && touched.password && errors.password}
                        </div>
                      </div>
                      <div className="check-box-content">
                        <div className="check-box d-flex">
                          <div>
                            <input type="checkbox" className="checkbox" id="" />
                          </div>
                          <div className="ml-2">Keep me logged in</div>
                        </div>
                      </div>
                      <div className="error-message">{errorMsg}</div>

                      <div className="button-main mt-3">
                        <button
                          type="submit"
                          className="btn btn-primary w-100"
                          // onClick={loginClick}
                        >
                          <img src={buttonIcon} alt="buttonIcon" className="btn-img mr-14" />
                          <span className="font-18 font_is">LOG IN</span>
                        </button>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
              <div className="forget-link">
                <Link to="/forgotPass">
                  <p className="text-orange">Forgot password</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Login;
