import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BottomNavBar() {
  const [activePage, setActivePage] = useState('PG');

  const activeClass = 'text-orange-500'; 
  const inactiveClass = 'text-gray-600'; 

  return (
    <nav className="fixed bottom-0 w-full bg-white shadow-lg flex justify-around items-center py-2">
      {/* Add a shadow effect using an additional div */}
      <div className="absolute inset-x-0 bottom-full h-2 bg-gradient-to-b from-white to-gray-200 shadow-md"></div>
      
      {/* PG Tab */}
      <Link
        to="/pg"
        className={`flex flex-col items-center ${activePage === 'PG' ? activeClass : inactiveClass}`}
        onClick={() => setActivePage('PG')}
      >
        <i className="fas fa-building text-2xl"></i> {/* Increased icon size */}
        <span className="text-sm">PG</span> {/* Increased text size */}
      </Link>

      {/* Mess Tab */}
      <Link
        to="/mess"
        className={`flex flex-col items-center ${activePage === 'Mess' ? activeClass : inactiveClass}`}
        onClick={() => setActivePage('Mess')}
      >
        <i className="fas fa-utensils text-2xl"></i> {/* Increased icon size */}
        <span className="text-sm">Mess</span> {/* Increased text size */}
      </Link>

      {/* Food Tab */}
      <Link
        to="/food"
        className={`flex flex-col items-center ${activePage === 'Food' ? activeClass : inactiveClass}`}
        onClick={() => setActivePage('Food')}
      >
        <i className="fas fa-hamburger text-2xl"></i> {/* Increased icon size */}
        <span className="text-sm">Food</span> {/* Increased text size */}
      </Link>

      {/* Rentals Tab */}
      <Link
        to="/rentals"
        className={`flex flex-col items-center ${activePage === 'Rentals' ? activeClass : inactiveClass}`}
        onClick={() => setActivePage('Rentals')}
      >
        <i className="fas fa-bicycle text-2xl"></i> {/* Increased icon size */}
        <span className="text-sm">Rentals</span> {/* Increased text size */}
      </Link>

      {/* Profile Tab */}
      <Link
        to="/profile"
        className={`flex flex-col items-center ${activePage === 'Profile' ? activeClass : inactiveClass}`}
        onClick={() => setActivePage('Profile')}
      >
        <i className="fas fa-user-circle text-2xl"></i> {/* Increased icon size */}
        <span className="text-sm">Profile</span> {/* Increased text size */}
      </Link>
    </nav>
  );
}

export default BottomNavBar;
