import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Onebox from './pages/Onebox';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Onebox" element={<Onebox />} />
      </Routes>
    </Router>
  );
}

export default App;
