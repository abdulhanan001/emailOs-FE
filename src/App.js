import React from 'react';
import UserForm from './pages/UserForm';
import Users from './pages/AllUsers';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
