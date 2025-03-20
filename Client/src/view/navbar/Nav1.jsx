
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
      .get("https://oyo-mern.onrender.com/restaurants") 
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
      .get(`https://oyo-mern.onrender.com/getRestaurantsByCity/${city}`) 
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
      .get(`https://oyo-mern.onrender.com/getRestaurantsByCity/${location}`) 
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
