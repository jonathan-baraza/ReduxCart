import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Auth.css";
import { AuthActions } from "../store/slices/AuthSlice";
import swal from "sweetalert";

const Auth = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email) {
      swal("", "You must enter your email", "warning");
    } else if (!password) {
      swal("", "You must enter your password", "warning");
    } else {
      dispatch(AuthActions.login());
    }
  };
  return (
    <div className="container rounded ">
      <h1>Login</h1>{" "}
      <form>
        <label htmlFor="id">Email</label>
        <input
          type="email"
          name="email"
          email="email"
          placeholder="Email"
          className="form-control"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          className="btn btn-success mx-auto"
          type="submit"
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
