import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './registration/Registration';
import MainPage from './main/MainPage';
import Profile from './account/Profile';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
    
  );
}

export default App;