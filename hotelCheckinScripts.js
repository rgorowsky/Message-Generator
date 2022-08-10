// Libraries / required section

// Variables Section
customerData = require('./customers.json');
corporationData = require('./corporations.json');

var raw_time = new Date();
var hotel_time = new Date(raw_time).toLocaleString();
var morningNight = hotel_time.slice(-2)
customerId = 0 // Just assuming that this is the primary input for now.  i.e. system asks for generating checkin message for customer X

// var constructedMessage = ""; // I don't think I need this - DELETE THIS IF NOT NEEDED
// var greeting_section = "";


// Greeting Section
if (morningNight == "AM") {
  greetingSection = "Good Morning "
} else if (morningNight == "PM") {
  greetingSection = "Good Evening "
} else {                                // this else section is a catch-all and a place to expand more complicated time edge cases
  greetingSection = "Hello "
}

// Customer Name Section
nameSection = customerData[customerId].firstName

// Some Interlude Section
corporateMessage = " and Welcome to Fabulous Munson Indiana! "

// Room Details Section
roomDetailsMessage = "Room " + customerData[customerId].reservation.roomNumber + " is ready for you now.  Please enjoy yourself, text this number for any questions, concerns, or requests!"
// customerData[customerId].reservation.roomNumber

// Output Section
checkinMessage = greetingSection + nameSection + "," + corporateMessage + roomDetailsMessage;

console.log(checkinMessage);
// return constructed_message
