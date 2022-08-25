import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const authState = useSelector((state) => state.auth.isAuthenticated);
  return <div className="App">{!authState ? <Auth /> : <Layout />}</div>;
}

export default App;
