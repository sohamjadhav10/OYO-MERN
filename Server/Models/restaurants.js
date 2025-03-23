const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    ratingCount: {
        type: Number,
        required: true
    },
    ratingText: {
        type: String,
        required: true
    },
    originalPrice: {
        type: Number,
        required: true
    },
    discountedPrice: {
        type: Number,
        required: true
    },
    discountPercentage: {
        type: Number,
        required: true
    },
    taxes: {
        type: Number,
        required: true
    },
    mainImage: {
        type: String,
        required: true
    },
    amenities: {
        type: [String], // Array of strings
        default: [] // This makes it an empty array by default
    },
    isWizardMember: {
        type: Boolean,
        required: true
    }
});

const Restaurant = mongoose.model('Oyo', restaurantSchema, 'Restaurants'); // Collection name: 'Restaurants'

module.exports = Restaurant;
