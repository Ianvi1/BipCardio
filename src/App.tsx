import Start from "./Components/Start";
import Home from "./Components/Home";
import './globals.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import CardMedit from "./Components/CardMedit";
import SobreDisp from "./Components/SobreDisp";
import CardMass from "./Components/CardMass";
import CardYoga from "./Components/CardYoga";
import AboutUs from "./Components/AboutUs";
import MeditExer1 from "./Components/MeditExer1";
import MeditExer2 from "./Components/MeditExer2";
import MeditExer3 from "./Components/MeditExer3";

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
        <Route path="/cardmass" element={<CardMass/>} />
        <Route path="/cardyoga" element={<CardYoga/>} />
        <Route path="/sobredisp" element={<SobreDisp/>} />
        <Route path="/sobrenos"  element={<AboutUs/>} />
        <Route path="/meditexer1"  element={<MeditExer1/>} />
        <Route path="/meditexer2"  element={<MeditExer2/>} />
        <Route path="/meditexer3"  element={<MeditExer3/>} />
      </Routes>
      </div>
    </Router>
  )
}

export default App
