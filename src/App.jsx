import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Creation from './pages/Creation';
import CustomCursor from './components/CustomCursor';
import ProjectDetail from './pages/ProjectDetail';

// 1. Import the new components
import Pixel from './pages/Pixel';
import PhotoDetail from './pages/PhotoDetail';

function App() {
  return (
    <Router>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/creation" element={<Creation />} />
        <Route path="/creation/:slug" element={<ProjectDetail />} />
        
        {/* 2. Add the new routes for the Pixel page */}
        <Route path="/pixel" element={<Pixel />} />
        <Route path="/pixel/:slug" element={<PhotoDetail />} />
        
      </Routes>
    </Router>
  );
}

export default App;