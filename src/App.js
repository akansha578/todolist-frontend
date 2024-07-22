import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import HomePage from './Components/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todoList" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
