import Start from "./Start";
import Home from "./Home";
import './globals.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import CardMedit from "./CardMedit";
import SobreDisp from "./SobreDisp";

const App = () => {
  return (
    <Router>
      <div>
        <Outlet/>
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/navbar"  element={<Navbar/>} />
        <Route path="/cardmedit" element={<CardMedit/>} />
        <Route path="/sobredisp" element={<SobreDisp/>} />
      </Routes>
      </div>
    </Router>
  )
}

export default App
