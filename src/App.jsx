import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

import * as authService from './services/authService'
import AuthContext from "./context/authContext";
import Path from "./paths";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Create from "./Components/CreatePost/Create";
import Posts from "./Components/Posts/Posts";
import Details from "./Components/Details/Details";

import "./index.css";

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = async (values) => {
   const result = await authService.login(values.email, values.password);

    setAuth(result)

    navigate(Path.Home)
  };

  const values = {
    loginSubmitHandler,
    username: auth.username,
    email: auth.email,
    isAuthenticated: !!auth.username,
  }

  return (
    <AuthContext.Provider value={values}>
      <>
        <Header />
        <Routes>
          <Route path={Path.Home} element={<Home />} />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<Create />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/details/:movieId" element={<Details />} />
        </Routes>
        <Footer />
      </>
    </AuthContext.Provider>
  );
}

export default App;
