import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AccountPage from './account/AccountPage';
import MainPage from './main/MainPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/account" element={<AccountPage />} />
        <Route path="/main" element={< MainPage />} />
      </Routes>
    </Router>
    
  );
}

export default App;