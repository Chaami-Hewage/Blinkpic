// src/app/App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Logging from '../pages/logging';
import Signup from '../pages/signup';
import Home from '../pages/home';  // Import Home, not home

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Logging />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />  {/* Use Home, not home */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
