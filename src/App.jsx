import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home/HomePage';
import { AboutPage } from './pages/About/AboutPage';

export function App () {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/vans"></Route>
      </Routes>
    </BrowserRouter>
);
};