import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import UsersPage from './pages/UsersPage';
import UserDetails from './pages/UserDetails';
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigate to="/users" />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;