import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Ensure it's from 'react-router-dom' in JSX format
import Login from '../pages/Login';
import Onebox from '../pages/Onebox'; // Corrected from Deskstop to Onebox for clarity

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/desktop' element={<Onebox />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
