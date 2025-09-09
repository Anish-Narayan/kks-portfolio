import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Pixel from "./components/Pixel";
import Creation from "./pages/Creation";
import CustomCursor from "./components/CustomCursor";
function App() {
  return (
    <Router>
      <CustomCursor>
        
      </CustomCursor>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pixel" element={<Pixel />} />
        <Route path="/creation" element={<Creation />} />
      </Routes>
    </Router>
  );
}

export default App;
