import { useState, useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import {Link} from 'react-router-dom'

import './style.css';


function Register() {
  const initialValues = {  email: "", password: "" ,Firstname:"" ,Lastname:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.Firstname) {
        errors.Firstname = "Firstname is required!";}
        if (!values.Lastname) {
            errors.Lastname = "Lastname is required!";}
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 5) {
      errors.password = "Password must be more than 5 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };
  return (
    <div className="container-log-in">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui-message-success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify()}</pre>
      )}
      <form onSubmit={handleSubmit} className="form-log">
      <div className="signin-continar">
        <div className="ui-form">
        <Avatar src="/broken-image.jpg" id="avatar" />
          <h1 >Register</h1>
          <div className="field">
            <input
              type="text"
              name="Firstname"
              placeholder="Firstname..."
              value={formValues.Firstname}
              onChange={handleChange}
              className="ii"
            />
          </div>
          <p>{formErrors.Firstname}</p>
          <div className="field">
            <input
              type="text"
              name="Lastname"
              placeholder="Lastname..."
              value={formValues.Lastname}
              onChange={handleChange}
              className="ii"
            />
          </div>
          <p>{formErrors.Lastname}</p>
          <div className="field">
            <input
              type="text"
              name="email"
              placeholder="Email..."
              value={formValues.email}
              onChange={handleChange}
              className="ii"
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <input
              type="password"
              name="password"
              placeholder="Password..."
              value={formValues.password}
              onChange={handleChange}
              className="ii"
            />
          </div>
          <p>{formErrors.password}</p>
       <Link to="/Profile"> <button className="buttonsubmit" >Register</button></Link>  
          <div className="signup-text">
          you have an account? <Link to="/Login"><a href="#" className="buttontext">Log in</a></Link> 
            </div>
        </div>
        </div>
      </form>
    </div>
  );
}
export default Register;