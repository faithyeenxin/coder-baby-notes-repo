// 👀 (3) CREATE SCHEMA FOR BOOKING DATA (ie model)

const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define enum for booking status
const BookingStatus = Object.freeze({
  Pending: 1,
  Confirmed: 2,
  Cancelled: 3,
});

// Create booking schema
const bookingSchema = new Schema(
  {
    // String type
    name: {
      type: String,
      required: true,
    },
    // Number type (representing status)
    status: {
      type: Number,
      required: true,
      enum: Object.values(BookingStatus), // Restrict to enum values
    },
  },
  {
    // Enable timestamps
    timestamps: true,
  }
);

// Create Booking model
const Booking = mongoose.model('Booking', bookingSchema);

// Export Booking model
module.exports = Booking;
