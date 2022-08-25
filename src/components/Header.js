import React from "react";
import Cart from "./Cart";
import "./Header.css";
import { useDispatch } from "react-redux";
import { AuthActions } from "../store/slices/AuthSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <Cart />
          </li>
          <li>
            <button
              onClick={() => {
                dispatch(AuthActions.logout());
              }}
            >
              logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
