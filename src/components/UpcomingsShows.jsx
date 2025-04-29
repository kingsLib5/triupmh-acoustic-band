import React from 'react';
import backgroundImage from '../assets/clo2.jpg'; // Import the image

const UpcomingShows = () => {
  const shows = [
    {
      date: 'May 20th',
      venue: 'Wasatch Distillery',
      location: 'Salt Lake City, UT',
      time: '6:00 PM'
    },
    {
      date: 'May 21th',
      venue: 'Wasatch Distillery',
      location: 'Salt Lake City, UT',
      time: '6:00 PM'
    },
    {
      date: 'June 15th',
      venue: 'High West Distillery',
      location: 'Coalville, UT',
      time: '6:00 PM'
    },
    {
      date: 'June 16th',
      venue: 'High West Distillery',
      location: 'Coalville, UT',
      time: '6:00 PM'
    },
    {
      date: 'July 5th',
      venue: 'Gracie\'s Bar',
      location: 'Salt Lake City, UT',
      time: '7:00 PM'
    },
    {
      date: 'July 26th',
      venue: 'Gracie\'s Bar',
      location: 'Salt Lake City, UT',
      time: '7:00 PM'
    },
    {
      date: 'July 27th',
      venue: 'Gracie\'s Bar',
      location: 'Salt Lake City, UT',
      time: '7:00 PM'
    },
    {
      date: 'July 28th',
      venue: 'Gracie\'s Bar',
      location: 'Salt Lake City, UT',
      time: 'Noon'
    }
  ];

  return (
    <div 
      id='shows'
      className="relative min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Use the imported image
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      
      <div className="relative max-w-2xl mx-auto p-8 font-sans text-white">
        <h2 className="text-3xl font-bold uppercase mb-8 tracking-wide">
          Upcoming Shows
        </h2>
        
        <div className="space-y-10">
          {shows.map((show, index) => (
            <div key={index} className="space-y-2">
              <p className="text-xl font-semibold text-white/90">{show.date}</p>
              <div className="pl-4 space-y-1 border-l-2 border-white/20">
                <p className="text-lg font-medium">{show.venue}</p>
                <p className="text-white/75">{show.location}</p>
                <p className="text-white/75">{show.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingShows;