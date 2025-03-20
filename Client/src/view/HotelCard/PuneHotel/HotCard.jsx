import React from "react";
import './HotelCard.css';

const HotCard = ({ hotList }) => {  
  

  return (
    <div>
      {hotList.map((data) => (
        <div key={data.id} className="hotel-card">
          <div className="company-serviced">Company-Serviced</div>
          <div className="card-content">
            <div className="main-image">
              <img src={data.mainImage} alt={data.name} />
            </div>
            <div className="details">
              <div className="hotel-info">
                <h2>{data.name}</h2>
                <div className="location">
                  {data.location} • <span className="distance">{data.distance}</span>
                </div>
              </div>
              <div className="rating">
                <span className="rating-score">{data.rating} ★</span>
                <span className="rating-text">
                  ({data.ratingCount} Ratings) • {data.ratingText}
                </span>
              </div>
              <div className="amenities">
                {data.amenities.map((amenity, index) => (
                  <div key={index} className="amenity">{amenity}</div>
                ))}
              </div>
              {data.isWizardMember && <div className="wizard-member">WIZARD MEMBER</div>}
              <div className="price-info">
                <div className="price">
                  <span className="discounted-price">₹{data.discountedPrice}</span>
                  <span className="original-price">₹{data.originalPrice}</span>
                  <span className="discount-percentage">{data.discountPercentage}% off</span>
                </div>
                <div className="taxes">+ ₹{data.taxes} taxes & fees • per room per night</div>
              </div>
              {data.recentBookings && (
                <div className="recent-bookings">{data.recentBookings} people booked this hotel in last 6 hours</div>
              )}
              <div className="actions">
                <button className="view-details">View Details</button>
                <button className="book-now">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotCard;
