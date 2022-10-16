import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../../redux/feature/auth/authSlice";
import Spinner from "../spinner/Spinner";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { appUser, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      username: email,
      password,
    };
    dispatch(login(user));
  };
  useEffect(() => {
    if (isError) {
      toast.error("Invalid credentials");
    }
    if (isSuccess || appUser) {
      navigate("/");
    }

    dispatch(reset());
  }, [appUser, isError, isSuccess, message, navigate, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="register-body">
      <div className="register-container">
        <div className="register-title">
          <h1>Sign In</h1>
          <p>
            <i></i> Welcome back
          </p>
        </div>
        <form className="register-form" onSubmit={(e) => handleSubmit(e)}>
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

          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
        <div className="sign-in-link">
          <p>
            Need an account? <Link to="/register">Sing Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
