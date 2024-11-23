const mongoose = require("mongoose")

// Creating schema
const travelPlanSchema = new mongoose.Schema({
    destination: String,
    startDate: Date,
    endDate: Date,
    activities: Array
});

// Create Model
const TravelPlan = mongoose.model('TravelPlan', travelPlanSchema);

module.exports = TravelPlan;