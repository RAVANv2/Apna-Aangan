import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about-us/AboutUs";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* <Route path="/our-vision" element={<OurVision />} />
        <Route path="/cx" element={<CX />} />
        <Route path="/voc" element={<VOC />} />
        <Route path="/contact-us" element={<ContactUs />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
