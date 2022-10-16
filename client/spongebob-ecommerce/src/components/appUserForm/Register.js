import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { reset, register } from "../../redux/feature/auth/authSlice";
import "./register.css";
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { appUser, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const { name, email, password, password2 } = formData;

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || appUser) {
      navigate("/");
    }

    dispatch(reset());
  }, [appUser, isError, isSuccess, message, navigate, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password != password2) {
      toast.error("passwords fo not match");
    } else {
      console.log(formData);
      const newUser = {
        name,
        username: email,
        password,
        role: "User",
      };
      dispatch(register(newUser));
    }
  };
  return (
    <div className="register-body">
      <div className="register-container">
        <div className="register-title">
          <h1>Sign Up</h1>
          <p>
            <i></i> Create Your Account
          </p>
        </div>
        <form className="register-form" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <input
              type="text"
              placeholder="Name"
              name="name"
              required
              value={name}
              onChange={(e) => {
                handleOnChange(e);
              }}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={(e) => {
                handleOnChange(e);
              }}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              name="password"
              minLength="6"
              value={password}
              onChange={(e) => {
                handleOnChange(e);
              }}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              minLength="6"
              value={password2}
              onChange={(e) => {
                handleOnChange(e);
              }}
              required
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <div className="sign-in-link">
          <p>
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
