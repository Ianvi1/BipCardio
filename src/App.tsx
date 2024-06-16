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
import MassExer1 from "./Components/MassExer1";
import MassExer2 from "./Components/MassExer2";
import MassExer3 from "./Components/MassExer3";
import YogaExer1 from "./Components/yogaExer1";
import YogaExer2 from "./Components/YogaExer2";
import YogaExer3 from "./Components/YogaExer3";
import Apr1 from "./Components/Apr1";
import Apr2 from "./Components/Apr2";
import Apr3 from "./Components/Apr3";
import Apr4 from "./Components/Apr4";
import Apr5 from "./Components/Apr5";
import Apr6 from "./Components/Apr6";
import SdCarc from "./Components/SdCarc";
import Manual1 from "./Components/Manual1";

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
        <Route path="/massexer1"  element={<MassExer1/>} />
        <Route path="/massexer2"  element={<MassExer2/>} />
        <Route path="/massexer3"  element={<MassExer3/>} />
        <Route path="/yogaexer1" element={<YogaExer1/>} /> 
        <Route path="/yogaexer2" element={<YogaExer2/>} />
        <Route path="/yogaexer3" element={<YogaExer3/>} />
        <Route path="/apr1" element={<Apr1/>} />
        <Route path="/apr2" element={<Apr2/>} />
        <Route path="/apr3" element={<Apr3/>} />
        <Route path="/apr4" element={<Apr4/>} />
        <Route path="/apr5" element={<Apr5/>} />
        <Route path="/apr6" element={<Apr6/>} />
        <Route path="/sdcarc" element={<SdCarc/>} />
        <Route path="/manual1" element={<Manual1/>} />
      </Routes>
      </div>
    </Router>
  )
}

export default App
