import React, { useState } from "react";

const cityData = [
  {
    name: "Delhi",
    price: "1,000 $ / per couple",
    rating: 5.0,
    reviews: 32,
    description:
      "Ex optio saepe ut quasi praesentium in nostrum laborum enim numquam nulla est magni necessitatibus? Quasi aliquam neque est, obcaecati odit dolor officiis!",
    details: {
      destination: "Connaught Place, Delhi",
      departure: "Main Square, New Delhi",
      departureTime: "Approximate 09.00 AM",
      returnTime: "Approximate 07.30 PM",
      dressCode: "Casual, comfortable and light",
      notIncluded: ["Gallery Ticket", "Lunch"],
      included: ["5 Star Accommodation", "Airport Transfer", "Breakfast", "Personal Guide"],
    },
    gallery: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    ],
  },
  // Add more cities as needed
];

const Informationpage = () => {
  const [selectedCity] = useState(cityData[0]);
  const [tab, setTab] = useState(1); // 1: Tour Plan
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative h-[350px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <nav className="relative z-10 flex items-center justify-between px-16 py-6">
          <div className="text-white text-2xl font-bold tracking-widest">Travel</div>
          <ul className="flex gap-8 text-white text-lg">
            <li className="hover:text-orange-400 cursor-pointer">Home</li>
            <li className="hover:text-orange-400 cursor-pointer">About</li>
            <li className="hover:text-orange-400 cursor-pointer">Services</li>
            <li className="hover:text-orange-400 cursor-pointer">Upcoming Packages</li>
          </ul>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold shadow">Get in Touch</button>
        </nav>
        <div className="relative z-10 flex flex-col items-center justify-center h-full pt-10">
          <h2 className="text-white text-lg tracking-widest mb-2">EXPLORE</h2>
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Landscapes</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 -mt-24 pb-12">
        <div className="bg-white rounded-xl shadow-lg p-6">
          {/* Tabs */}
          <div className="flex gap-2 md:gap-6 mb-8 border-b pb-2">
            <button className={`px-4 py-2 font-semibold rounded-t-lg ${tab === 0 ? 'text-orange-500 border-b-4 border-orange-500 bg-orange-50' : 'text-gray-600 hover:text-orange-500 hover:bg-orange-50'}`} onClick={() => setTab(0)}>Information</button>
            <button className={`px-4 py-2 font-semibold rounded-t-lg ${tab === 1 ? 'text-orange-500 border-b-4 border-orange-500 bg-orange-50' : 'text-gray-600 hover:text-orange-500 hover:bg-orange-50'}`} onClick={() => setTab(1)}>Tour Plan</button>
            <button className={`px-4 py-2 font-semibold rounded-t-lg ${tab === 2 ? 'text-orange-500 border-b-4 border-orange-500 bg-orange-50' : 'text-gray-600 hover:text-orange-500 hover:bg-orange-50'}`} onClick={() => setTab(2)}>Location</button>
            <button className={`px-4 py-2 font-semibold rounded-t-lg ${tab === 3 ? 'text-orange-500 border-b-4 border-orange-500 bg-orange-50' : 'text-gray-600 hover:text-orange-500 hover:bg-orange-50'}`} onClick={() => setTab(3)}>Gallery</button>
          </div>

          {/* Content and Sidebar */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedCity.name}</h2>
              <div className="flex items-center gap-4 mb-2">
                <span className="text-orange-500 text-xl font-bold">{selectedCity.price}</span>
                <span className="text-yellow-500 flex items-center gap-1">★ {selectedCity.rating} <span className="text-gray-500 text-sm">({selectedCity.reviews} reviews)</span></span>
              </div>
              <p className="text-gray-500 text-sm mb-4">{selectedCity.description}</p>
              <div className="mb-4">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div><span className="font-semibold text-gray-700">Destination:</span> {selectedCity.details.destination}</div>
                  <div><span className="font-semibold text-gray-700">Departure:</span> {selectedCity.details.departure}</div>
                  <div><span className="font-semibold text-gray-700">Departure Time:</span> {selectedCity.details.departureTime}</div>
                  <div><span className="font-semibold text-gray-700">Return Time:</span> {selectedCity.details.returnTime}</div>
                  <div><span className="font-semibold text-gray-700">Dress Code:</span> {selectedCity.details.dressCode}</div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">Not Included:</span>
                    <ul className="list-disc ml-5 text-red-500">
                      {selectedCity.details.notIncluded.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Included:</span>
                    <ul className="list-disc ml-5 text-green-600">
                      {selectedCity.details.included.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
              {/* Gallery */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-2">From our gallery</h3>
                <p className="text-gray-500 text-sm mb-4">Ex optio saepe ut quasi praesentium in nostrum laborum enim numquam nulla est magni necessitatibus? Quasi aliquam neque est, obcaecati odit dolor officiis!</p>
                <div className="grid grid-cols-3 gap-2">
                  {selectedCity.gallery.map((img, i) => (
                    <img key={i} src={img} alt="gallery" className="rounded-lg h-24 w-full object-cover" />
                  ))}
                </div>
              </div>
            </div>
            {/* Sidebar */}
            <aside className="w-full md:w-80 bg-gray-100 rounded-xl p-6 flex flex-col gap-4 shadow-md">
              <h2 className="text-lg font-bold text-gray-800 mb-2">Book This Tour</h2>
              <p className="text-gray-500 text-sm mb-4">Ex optio saepe ut quasi praesentium in nostrum laborum enim numquam nulla est magni necessitatibus?</p>
              <form className="flex flex-col gap-3">
                <input type="text" placeholder="Name" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400" />
                <input type="email" placeholder="Email" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400" />
                <input type="email" placeholder="Confirm Email" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400" />
                <input type="tel" placeholder="Phone" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400" />
                <input type="number" placeholder="Number of ticket" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400" />
                <textarea placeholder="Message" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400" rows={2}></textarea>
                <button type="button" className="bg-orange-300 hover:bg-orange-400 text-white font-semibold py-2 rounded shadow">Check Availability</button>
                <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded shadow">Book Now</button>
              </form>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Informationpage;
