import React, { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa'; // Import icons from react-icons

function Mess() {
  const [activeTab, setActiveTab] = useState('Today'); // Default active tab
  const [expandedCards, setExpandedCards] = useState({}); 

  const tabs = ['Yesterday', 'Today', 'Tomorrow'];

  // Get today's date
  const today = new Date();

  // Format date to dd/mm/yyyy
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0'); // Get day and pad with 0 if needed
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-based) and pad
    const year = date.getFullYear();
    return `${day}/${month}/${year}`; // Return formatted date
  };

  // Calculate the dates for each tab
  const yesterdayDate = new Date(today);
  yesterdayDate.setDate(today.getDate() - 1);
  const tomorrowDate = new Date(today);
  tomorrowDate.setDate(today.getDate() + 1);

  // Get the meals data based on the selected tab
  const getMealData = () => {
    switch (activeTab) {
      case 'Yesterday':
        return {
          date: formatDate(yesterdayDate),
          meals: ['Breakfast', 'Lunch', 'Dinner'],
          bookingStatus: 'Booking closed',
          statusColor: 'text-red-600', // Red color for closed booking
          showButtons: false, // Do not show buttons for yesterday
        };
      case 'Today':
        return {
          date: formatDate(today),
          meals: ['Breakfast', 'Lunch', 'Dinner'],
          bookingStatus: 'Booking ends in 1hr',
          statusColor: 'text-orange-600', // Orange color for today
          showButtons: true, // Show buttons for today
        };
      case 'Tomorrow':
        return {
          date: formatDate(tomorrowDate),
          meals: ['Breakfast', 'Lunch', 'Dinner'],
          bookingStatus: 'Booking not started',
          statusColor: 'text-green-600', // Green color for not started booking
          showButtons: true, // Show buttons for tomorrow
        };
      default:
        return { date: '', meals: [], bookingStatus: '', statusColor: '', showButtons: false };
    }
  };

  const { date, meals, bookingStatus, statusColor, showButtons } = getMealData();

  const handleToggle = (meal) => {
    setExpandedCards((prev) => ({ ...prev, [meal]: !prev[meal] })); // Toggle the expanded state for the clicked meal
  };

  return (
    <div className="flex flex-col p-4 mt-2 pb-10"> {/* Add padding bottom */}
      {/* Title and Track History Button */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold text-left">Mess Manager</h1>
        <button
          className="text-sm text-gray-500 hover:text-gray-700 font-semibold focus:outline-none" 
        >
          Track History
        </button>
      </div>

      {/* Tab Bar */}
      <div className="flex space-x-4 overflow-x-auto mb-4 mt-5">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 border rounded-md 
              ${activeTab === tab ? 'bg-orange-500 text-white' : 'bg-white text-gray-700 border-gray-300'} 
              focus:outline-none ${activeTab !== tab ? 'hover:bg-gray-100' : ''}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards for meals */}
      <div className="space-y-4 mt-5 mb-14">
        {meals.map((meal) => (
          <div key={meal} className="border rounded-lg p-4 bg-white shadow-md flex flex-col justify-between mb-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{meal}</h2>
                <p className="text-gray-500">{date}</p>
              </div>
              {showButtons && (
                <div className="flex space-x-2">
                  {/* Close Button on the Left */}
                  <button className="flex items-center justify-center w-8 h-8 border border-red-500 rounded-full text-red-500 hover:bg-red-100 focus:outline-none">
                    <FaTimes />
                  </button>
                  {/* Tick Button on the Right */}
                  <button className="flex items-center justify-center w-8 h-8 border border-green-500 rounded-full text-green-500 hover:bg-green-100 focus:outline-none">
                    <FaCheck />
                  </button>
                </div>
              )}
            </div>

            {/* Expanded Section */}
            <div className={`mt-2 transition-all duration-300`}>
              {showButtons && (
                <div className="mb-2 h-8 bg-orange-100 flex items-center rounded cursor-pointer mt-3" onClick={() => handleToggle(meal)}>
                  <span className="text-gray-700 text-sm text-left mx-2">Show Menu</span>
                </div>
              )}
              <div className={`${expandedCards[meal] ? 'h-auto bg-white' : 'h-0 overflow-hidden'} transition-all duration-300 rounded`}>
                {expandedCards[meal] && (
                  <div className="transition-all duration-300">
                    <p className="text-gray-700">Here is the menu for {meal}.</p>
                    {/* Additional menu items can be listed here */}
                  </div>
                )}
              </div>
            </div>

            {/* Booking Status Message */}
            <p className={`${statusColor} mt-2`}>{bookingStatus}</p>
            
            {/* Conditionally Render Add Addon Button */}
            {activeTab !== 'Yesterday' && (  // Only render if not on 'Yesterday' tab
              <button className="mt-2 h-10 bg-orange-500 text-white py-1 px-2 rounded-md hover:bg-orange-600 focus:outline-none">
                Add Addon
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mess;
