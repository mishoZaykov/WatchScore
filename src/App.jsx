import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/authContext";
import Path from "./paths";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Create from "./Components/Create/Create";
import Posts from "./Components/Posts/Posts";
import Details from "./Components/Details/Details";
import Logout from "./Components/Logout/Logout";
import Edit from "./Components/Edit/Edit";

import "./index.css";

function App() {
  return (
    <AuthProvider>
      <>
        <Header />
        <Routes>
          <Route path={Path.Home} element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<Create />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/details/:movieId" element={<Details />} />
          <Route path={Path.Edit} element={<Edit />} />
          <Route path={Path.Logout} element={<Logout />} />
        </Routes>
        <Footer />
      </>
    </AuthProvider>
  );
}

export default App;
