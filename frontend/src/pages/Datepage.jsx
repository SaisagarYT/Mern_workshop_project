
import React from "react";

import { useState } from "react";

const toursPages = [
  [
    {
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      date: "12 September 2025",
      price: "$1,100",
  title: "Delhi",
      desc: "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
      rating: 5.0,
    },
    {
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80",
      date: "15 September 2025",
      price: "$2,300",
  title: "Mumbai",
      desc: "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
      rating: 4.9,
    },
    {
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
      date: "20 September 2025",
      price: "$3,000",
  title: "Bangalore",
      desc: "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
      rating: 4.8,
    },
    {
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80",
      date: "22 September 2025",
      price: "$2,000",
  title: "Hyderabad",
      desc: "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
      rating: 4.6,
    },
    {
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      date: "25 September 2025",
      price: "$4,400",
  title: "Chennai",
      desc: "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
      rating: 5.0,
    },
    {
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      date: "28 September 2025",
      price: "$1,800",
  title: "Kolkata",
      desc: "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
      rating: 4.0,
    },
  ],
  [
    {
      image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
      date: "2 October 2025",
      price: "$2,200",
  title: "Pune",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 4.7,
    },
    {
      image: "https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=400&q=80",
      date: "5 October 2025",
      price: "$1,900",
  title: "Ahmedabad",
      desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 4.5,
    },
    {
      image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80",
      date: "8 October 2025",
      price: "$2,800",
  title: "Jaipur",
      desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      rating: 4.8,
    },
    {
      image: "https://images.unsplash.com/photo-1464790719320-516ecd75af6c?auto=format&fit=crop&w=400&q=80",
      date: "10 October 2025",
      price: "$2,100",
  title: "Surat",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit.",
      rating: 4.4,
    },
    {
      image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd8?auto=format&fit=crop&w=400&q=80",
      date: "12 October 2025",
      price: "$2,600",
  title: "Lucknow",
      desc: "Excepteur sint occaecat cupidatat non proident.",
      rating: 4.9,
    },
    {
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      date: "15 October 2025",
      price: "$2,300",
  title: "Kanpur",
      desc: "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: 4.3,
    },
  ],
  [
    {
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      date: "18 October 2025",
      price: "$2,700",
  title: "Nagpur",
      desc: "Curabitur non nulla sit amet nisl tempus convallis.",
      rating: 4.6,
    },
    {
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      date: "20 October 2025",
      price: "$2,900",
  title: "Indore",
      desc: "Vivamus magna justo, lacinia eget consectetur sed.",
      rating: 4.7,
    },
    {
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      date: "22 October 2025",
      price: "$3,100",
  title: "Thane",
      desc: "Pellentesque in ipsum id orci porta dapibus.",
      rating: 4.8,
    },
    {
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80",
      date: "25 October 2025",
      price: "$2,500",
  title: "Bhopal",
      desc: "Proin eget tortor risus.",
      rating: 4.5,
    },
    {
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
      date: "28 October 2025",
      price: "$2,800",
  title: "Visakhapatnam",
      desc: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar.",
      rating: 4.4,
    },
    {
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80",
      date: "30 October 2025",
      price: "$2,200",
  title: "vijayawada",
      desc: "Vestibulum ac diam sit amet quam vehicula elementum.",
      rating: 4.2,
    },
  ],
  [
    {
      image: "https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=400&q=80",
      date: "2 November 2025",
      price: "$2,400",
  title: "Patna",
      desc: "Nulla porttitor accumsan tincidunt.",
      rating: 4.9,
    },
    {
      image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80",
      date: "5 November 2025",
      price: "$2,700",
  title: "Vadodara",
      desc: "Quisque velit nisi, pretium ut lacinia in.",
      rating: 4.8,
    },
    {
      image: "https://images.unsplash.com/photo-1464790719320-516ecd75af6c?auto=format&fit=crop&w=400&q=80",
      date: "8 November 2025",
      price: "$2,900",
  title: "Ghaziabad",
      desc: "Curabitur arcu erat, accumsan id imperdiet et.",
      rating: 4.7,
    },
    {
      image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd8?auto=format&fit=crop&w=400&q=80",
      date: "10 November 2025",
      price: "$2,600",
  title: "Ludhiana",
      desc: "Donec sollicitudin molestie malesuada.",
      rating: 4.6,
    },
    {
      image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
      date: "12 November 2025",
      price: "$2,800",
  title: "Agra",
      desc: "Vivamus suscipit tortor eget felis porttitor.",
      rating: 4.5,
    },
    {
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      date: "15 November 2025",
      price: "$2,300",
  title: "Nashik",
      desc: "Pellentesque in ipsum id orci porta dapibus.",
      rating: 4.4,
    },
  ],
];

const Datepage = () => {
  const [page, setPage] = useState(0);
  const tours = toursPages[page];
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')" }}>
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
          <h2 className="text-white text-lg tracking-widest mb-2">SEARCH TOUR</h2>
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Travel With Us</h1>
        </div>
      </div>

      {/* Filters and Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 -mt-24 pb-12">
        <div className="bg-white rounded-xl shadow-lg p-6">
          {/* Filter Tabs */}
          <div className="flex gap-2 md:gap-6 mb-8 border-b pb-4">
            <button className="px-6 py-2 rounded-t-lg font-semibold text-orange-500 border-b-4 border-orange-500 bg-orange-50">Date</button>
            <button className="px-6 py-2 rounded-t-lg font-semibold text-gray-600 hover:text-orange-500 hover:bg-orange-50">Price Low To High</button>
            <button className="px-6 py-2 rounded-t-lg font-semibold text-gray-600 hover:text-orange-500 hover:bg-orange-50">Price High To Low</button>
            <button className="px-6 py-2 rounded-t-lg font-semibold text-gray-600 hover:text-orange-500 hover:bg-orange-50">Name (A-Z)</button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tour Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 flex-1">
              {tours.map((tour, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img src={tour.image} alt={tour.title} className="w-full h-40 object-cover" />
                    <div className="absolute top-2 left-2 bg-white bg-opacity-80 text-xs px-3 py-1 rounded-full text-gray-700 font-semibold shadow">{tour.date}</div>
                    <div className="absolute bottom-2 left-2 bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow">{tour.price}</div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-1 text-gray-800">{tour.title}</h3>
                    <p className="text-gray-500 text-sm mb-2">{tour.desc}</p>
                    <div className="flex items-center gap-1 text-yellow-500 text-sm">
                      <span>★</span>
                      <span className="font-semibold text-gray-700">{tour.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-80 bg-gray-100 rounded-xl p-6 flex flex-col gap-4 shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Plan Your Trip</h2>
              <p className="text-gray-500 text-sm mb-4">
                Ex optio saepe ut quasi praesentium in nostrum laborum enim numquam nulla eos magni molestiae est adipisci minima iste eaque est dicta!
              </p>
              <form className="flex flex-col gap-3">
                <input type="text" placeholder="Search Tour" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400" />
                <input type="text" placeholder="Where To?" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400" />
                <input type="date" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400" />
                <div className="mt-2">
                  <label className="block text-gray-700 text-sm mb-1">Filter By Price</label>
                  <input type="range" min="12" max="3000" className="w-full accent-orange-500" />
                  <div className="text-xs text-gray-500 mt-1">Price: $12 - $3000</div>
                </div>
                <button type="submit" className="mt-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded shadow">Book Now</button>
              </form>
            </aside>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-10">
            <button
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-orange-100 text-gray-500"
              onClick={() => setPage((prev) => (prev > 0 ? prev - 1 : prev))}
              disabled={page === 0}
            >
              {'<'}
            </button>
            {[0, 1, 2, 3].map((p) => (
              <button
                key={p}
                className={`w-8 h-8 flex items-center justify-center rounded-full ${page === p ? 'bg-orange-500 text-white font-bold' : 'hover:bg-orange-100 text-gray-700'}`}
                onClick={() => setPage(p)}
              >
                {p + 1}
              </button>
            ))}
            <button
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-orange-100 text-gray-500"
              onClick={() => setPage((prev) => (prev < 3 ? prev + 1 : prev))}
              disabled={page === 3}
            >
              {'>'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Datepage;
