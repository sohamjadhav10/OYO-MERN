// import React from 'react';
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useState, useEffect } from "react"; 
// import "./Nav1.css";

// const Nav1 = () => {

//   // import React, { useEffect, useState } from "react";
//   // import axios from "axios";
//   // import "./App.css";
  
//     const [cities, setCities] = useState([]);
//     const [selectedCity, setSelectedCity] = useState("");
//     const [restaurants, setRestaurants] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
  
//     useEffect(() => {
//       // Fetch all restaurants first to extract unique cities
//       axios
//         .get("http://localhost:5500/restaurants")
//         .then((response) => {
//           if (response.data && Array.isArray(response.data)) {
//             const uniqueCities = [
//               ...new Set(response.data.map((r) => r.city)),
//             ];
//             setCities(uniqueCities);
//           }
//         })
//         .catch((error) => console.error("Error fetching cities:", error));
//     }, []);
  
//     const handleCityChange = (event) => {
//       const city = event.target.value;
//       setSelectedCity(city);
//       setLoading(true);
//       setError(null);
  
//       axios
//         .get(`http://localhost:5500/getRestaurantsByCity/${city}`)
//         .then((response) => {
//           if (response.data.restaurantList && Array.isArray(response.data.restaurantList)) {
//             setRestaurants(response.data.restaurantList);
//           } else {
//             setRestaurants([]);
//           }
//         })
//         .catch((error) => {
//           setError("Failed to fetch restaurants.");
//           setLoading(false);
//         });
//     };
  
//     return (
//       console.log("cities-->>>",cities),
//       <div className="container">
//         <h1 className="title">Zomato Clone 🍽️</h1>
  
//         <div className="dropdown-container">
//           <label>Select a City: </label>
//           <select onChange={handleCityChange} value={selectedCity}>
//             <option value="">-- Select --</option>
//             {cities.map((city, index) => (
  
//               <option key={index} value={city}>
//                 {city}
//               </option>
//             ))}
//           </select>
//         </div>
  
//         {loading && <p className="loading">Loading restaurants...</p>}
//         {error && <p className="error">{error}</p>}
  
//         <div className="restaurant-list">
//           {restaurants.length > 0 ? (
//             restaurants.map((restaurant) => (
//               <div key={restaurant.id} className="restaurant-card">
//                 <h2>{restaurant.restaurant}</h2>
//                 <p>📍 {restaurant.city}</p>
//               </div>
//             ))
//           ) : (
//             <p className="no-data">No restaurants found for this city.</p>
//           )}
//         </div>
//       </div>
//     );
//   };
  
//   export default Nav1;

//     return (

//         <div className='nv'>
//             <ul className="nav justify-content-center njc" >

//             <select onChange={handleCityChange} value={selectedCity}>
//             <option value="">-- Select --</option>
//             {cities.map((city, index) => (
  
//               <option key={index} value={city}>
//                 {city}
//               </option>
//             ))}
//           </select>


//             <ul className="dropdown-menu">
//             <b className='pl'>Popular Localities</b>
//             {restaurants.length > 0 ? (
//             restaurants.map((restaurant) => (
//               <div key={restaurant.id} className="restaurant-card">
//                 <h2>{restaurant.restaurant}</h2>
//                 <p>📍 {restaurant.city}</p>
//               </div>
//             ))
//           ) : (
//             <p className="no-data">No restaurants found for this city.</p>
//           )}
//           </ul>
          

//           {loading && <p className="loading">Loading restaurants...</p>}
//           {error && <p className="error">{error}</p>}

         
//       <li className="nav-item dropdown">
//         <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Pune</a>
//         <ul className="dropdown-menu">
//           <b className='pl'>Popular Localities</b>
//           <li className="dropdown-item"><Link to="/pune">Pune</Link></li>
//         </ul>
//       </li>

//       <li className="nav-item dropdown">
//         <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Banglore</a>
//         <ul className="dropdown-menu">
//           <b className='pl'>Popular Localities</b>
//           <li><a className="dropdown-item" href="#">Action</a></li>
//         </ul>
//       </li>

//       <li className="nav-item dropdown">
//         <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Delhi</a>
//         <ul className="dropdown-menu">
//           <b className='pl'>Popular Localities</b>
//           <li><a className="dropdown-item" href="#">Action</a></li>
//         </ul>
//       </li>

//       <li className="nav-item dropdown">
//         <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Kolhapur</a>
//         <ul className="dropdown-menu">
//           <b className='pl'>Popular Localities</b>
//           <li><a className="dropdown-item" href="#">Action</a></li>
//         </ul>
//       </li>

//       <li className="nav-item dropdown">
//         <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Punjab</a>
//         <ul className="dropdown-menu">
//           <b className='pl'>Popular Localities</b>
//           <li><a className="dropdown-item" href="#">Action</a></li>
//         </ul>
//       </li>

//       <li className="nav-item dropdown">
//         <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Mumbai</a>
//         <ul className="dropdown-menu">
//           <b className='pl'>Popular Localities</b>
//           <li><a className="dropdown-item" href="#">Action</a></li>
//         </ul>
//       </li>

//       <li className="nav-item dropdown">
//         <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Kolkata</a>
//         <ul className="dropdown-menu">
//           <b className='pl'>Popular Localities</b>
//           <li><a className="dropdown-item" href="#">Action</a></li>
//         </ul>
//       </li>

//       <li className="nav-item">
//         <a className="nav-link active" aria-current="page" href="#">All Cities</a>
//       </li>
//     </ul>
//         </div>
//     );
// };



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Nav1 = () => {
  const [cities, setCities] = useState([]);
  const [locations, setLocations] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all restaurants from the backend
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://oyo-mern.onrender.com/restaurants") // Replace with actual API URL
      .then((response) => {
        const data = response.data;

        // Extract unique cities
        const uniqueCities = [...new Set(data.map((item) => item.city))];
        setCities(uniqueCities);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Failed to load cities.");
        setLoading(false);
      });
  }, []);

  // Handle city selection and fetch restaurants
  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    setLoading(true);
    setError(null);

    axios
      .get(`https://oyo-mern.onrender.com/getRestaurantsByCity/${city}`) // Replace with actual API
      .then((response) => {
        setRestaurants(response.data.restaurantList);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching restaurants:", err);
        setError("Failed to load restaurants.");
        setLoading(false);
      });
  };

  const handleLocationChange = (event) => {
    const location = event.target.value;
    setSelectedCity(location);
    setLoading(true);
    setError(null);

    axios
      .get(`https://oyo-mern.onrender.com/getRestaurantsByCity/${location}`) // Replace with actual API
      .then((response) => {
        setRestaurants(response.data.restaurantList);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching restaurants:", err);
        setError("Failed to load restaurants.");
        setLoading(false);
      });
  }

  return (
    <div className="nv">
      <ul className="nav justify-content-center njc">
        {/* Dropdown for selecting a city */}
        {/* <div className="dropdown-container">
          <label>Select a City: </label>
          <select onChange={handleCityChange} value={selectedCity}>
            <option value="">-- Select --</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div> */}

        {/* Loading and Error Messages */}
        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}

        Restaurant List
        <ul className="dropdown-menu">
          <b className="pl">Popular Localities</b>
          {restaurants.length > 0 ? (
            restaurants.map((restaurant) => (
              <div key={restaurant.id} className="restaurant-card">
                <h2>{restaurant.name}</h2>
                <p>📍 {restaurant.city}</p>
              </div>
            ))
          ) : (
            <p className="no-data">No restaurants found for this city.</p>
          )}
        </ul>

        {/* Dynamic City Navigation */}
        {cities.map((city, index) => (
          <li key={index} className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              {city}
            </a>
            <ul className="dropdown-menu">
              <b className="pl">Popular Localities</b>
              <li>
                <Link className="dropdown-item" to={`/${city.toLowerCase()}`}>
                  {city}
                </Link>
              </li>
            </ul>
          </li>
        ))}

        {/* "All Cities" Link */}
        <li className="nav-item">
          <Link className="nav-link active" to="/all-cities">
            All Cities
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav1;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const Nav1 = () => {
//   const [cities, setCities] = useState([]);
//   const [locations, setLocations] = useState([]);
//   const [selectedCity, setSelectedCity] = useState("");
//   const [selectedLocation, setSelectedLocation] = useState("");
//   const [restaurants, setRestaurants] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Fetch all cities from the backend
//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get("http://localhost:5500/restaurants") // Replace with actual API URL
//       .then((response) => {
//         const data = response.data;

//         // Extract unique cities
//         const uniqueCities = [...new Set(data.map((item) => item.city))];
//         setCities(uniqueCities);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching data:", err);
//         setError("Failed to load cities.");
//         setLoading(false);
//       });
//   }, []);

//   // Handle city selection and fetch locations
//   const handleCityChange = (event) => {
//     const city = event.target.value;
//     setSelectedCity(city);
//     setSelectedLocation("");
//     setLoading(true);
//     setError(null);

//     axios
//       .get(`http://localhost:5500/getLocationsByCity/${city}`) // Replace with actual API
//       .then((response) => {
//         setLocations(response.data.locations);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching locations:", err);
//         setError("Failed to load locations.");
//         setLoading(false);
//       });
//   };

//   return (
//     <div className="nv">
//       <ul className="nav justify-content-center njc">
//         {/* Loading and Error Messages */}
//         {loading && <p className="loading">Loading...</p>}
//         {error && <p className="error">{error}</p>}

//         {/* Dynamic City Navigation */}
//         {cities.map((city, index) => (
//           <li key={index} className="nav-item dropdown">
//             <Link
//               className="nav-link dropdown-toggle"
//               data-bs-toggle="dropdown"
//               href="#"
//               role="button"
//               aria-expanded="false"
//             >
//               {city}
//             </Link>
//             <ul className="dropdown-menu">
//               <b className="pl">Popular Localities</b>
//               {locations.length > 0 ? (
//                 locations.map((city, index) => (
//                   <li key={index}>
//                     <Link className="dropdown-item" to={`/${city.toLowerCase()}`}>
//                       {city}
//                     </Link>
//                   </li>
//                 ))
//               ) : (
//                 <li>No locations available</li>
//               )}
//             </ul>
//           </li>
//         ))}

//         {/* "All Cities" Link */}
//         <li className="nav-item">
//           <Link className="nav-link active" to="/all-cities">
//             All Cities
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Nav1;
