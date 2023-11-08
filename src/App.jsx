import { BrowserRouter as Router, Routes, Route } from "react-router-dom";import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import "./styles/header.css";
import "./styles/index.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
