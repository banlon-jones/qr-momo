import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/home/Home';
import Login from './views/login/Login';
import Register from './views/register/Register';
import Success from './views/success-page/Success';
import Dashboard from './views/dashboard/dashboard';
import ScanQR from './views/scanMe/scanQR';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/success" element={<Success />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/scan/:channel/:amount" element={<ScanQR />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
