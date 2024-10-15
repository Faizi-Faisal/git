import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomNavBar from './components/BottomNavBar';
import PG from './pages/PG';
import Mess from './pages/Mess';
import Food from './pages/Food';
import Rentals from './pages/Rentals';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<PG />} />
          <Route path="/pg" element={<PG />} />
          <Route path="/mess" element={<Mess />} />
          <Route path="/food" element={<Food />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        {/* Bottom Navigation Bar */}
        <BottomNavBar />
      </div>
    </Router>
  );
}

export default App;
