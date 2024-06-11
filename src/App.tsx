import Start from "./Start";
import Home from "./Home";
import './globals.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const App = () => {
  return (
    <Router>
      <div>
        <Outlet/>
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/navbar"  element={<Navbar/>} />
      </Routes>
      </div>
    </Router>
  )
}

export default App
