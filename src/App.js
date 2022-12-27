import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './views/home/Home';
import Login from './views/login/Login';
import Register from './views/register/Register';
import Success from './views/success-page/Success';
import Dashboard from './views/dashboard/dashboard';
import ScanQR from './views/scanMe/scanQR';
import NotFound from './views/404/404page';

function App() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/success" element={<Success />} />
          <Route path="/dashboard" element={(user.isLoggedIn) ? <Dashboard /> : <Login />} />
          <Route path="/scan/:channel/:amount" element={(user.isLoggedIn) ? <ScanQR /> : <Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
