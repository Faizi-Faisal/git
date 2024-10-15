import React, { useState, useEffect } from 'react';

function PG() {
  const studentName = "John Doe"; 
  const studentId = "HVNS123456"; 
  const profilePicUrl = "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg";

  const carouselImages = [
    "https://img.freepik.com/premium-psd/real-estate-house-property-horizontal-banner-facebook-cover-advertising-template_177160-651.jpg",
    "https://img.freepik.com/premium-psd/real-estate-house-property-horizontal-banner-facebook-cover-advertising-template_177160-658.jpg",
    "https://img.freepik.com/premium-psd/real-estate-house-property-horizontal-banner-facebook-cover-advertising-template_177160-643.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, [carouselImages.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col p-4 max-w-screen-md mx-auto">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4 mt-3 flex-wrap"> 
        <div className="flex-1">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 font-poppins">{studentName}</h1>
          <p className="text-gray-600 font-poppins">{studentId}</p>
        </div>
        <img 
          src={profilePicUrl} 
          alt="Profile" 
          className="w-12 h-12 rounded-full border border-gray-300" 
        />
      </div>
      
      {/* Search Bar */}
      <div className="relative mb-4 mt-5">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-3 border rounded-xl bg-gray-100 focus:outline-none focus:ring-0 pl-10"
        />
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M13.496 12.904a6.5 6.5 0 1 0-1.366 1.366l3.646 3.646a1 1 0 0 0 1.414-1.414l-3.646-3.646zM15 8.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>

      {/* Carousel Section */}
      <div className="flex overflow-hidden h-56 mt-4">
        <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {carouselImages.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <img src={image} alt={`Carousel Image ${index + 1}`} className="w-full h-full object-cover rounded-xl border border-gray-300" /> {/* Added border for outline */}
            </div>
          ))}
        </div>
      </div>

      {/* Dotted Indicator */}
      <div className="flex justify-center mt-2">
        {carouselImages.map((_, index) => (
          <button 
            key={index} 
            className={`w-2 h-2 rounded-full mx-1 ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-300'}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>

      {/* General Section */}
      <div className="mt-10 mb-14">
        <h2 className="text-xl font-bold text-gray-800 mb-4">General</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Maintenance Card */}
          <div className="flex flex-col items-center bg-white p-2 shadow-md rounded-lg border border-gray-300"> {/* Reduced padding */}
            <i className="fas fa-tools text-2xl text-orange-500"></i> {/* Reduced icon size */}
            <span className="mt-1 text-gray-700 text-sm">Maintenance</span> {/* Reduced text size */}
          </div>

          {/* Pay Fee Card */}
          <div className="flex flex-col items-center bg-white p-2 shadow-md rounded-lg border border-gray-300"> {/* Reduced padding */}
            <i className="fas fa-wallet text-2xl text-orange-500"></i> {/* Reduced icon size */}
            <span className="mt-1 text-gray-700 text-sm">Pay Fee</span> {/* Reduced text size */}
          </div>

          {/* Payment History Card */}
          <div className="flex flex-col items-center bg-white p-2 shadow-md rounded-lg border border-gray-300"> {/* Reduced padding */}
            <i className="fas fa-history text-2xl text-orange-500"></i> {/* Reduced icon size */}
            <span className="mt-1 text-gray-700 text-sm">Payment History</span> {/* Reduced text size */}
          </div>

          {/* Raised Tickets Card */}
          <div className="flex flex-col items-center bg-white p-2 shadow-md rounded-lg border border-gray-300"> {/* Reduced padding */}
            <i className="fas fa-ticket-alt text-2xl text-orange-500"></i> {/* Reduced icon size */}
            <span className="mt-1 text-gray-700 text-sm">Raised Tickets</span> {/* Reduced text size */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PG;
