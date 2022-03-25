// Use the Firebase Cloud Functions
const functions = require("firebase-functions");

// Use to make https requests
const https = require("https");


exports.bookeoAvailability = functions.https.onCall((product) => {
  console.log("Running Bookeo Availability Request");
  return new Promise((resolve, reject)=>{
    const APIKey = "AP4AMXRXKCJTCAK4WF4TR31549KNJAK14911BF5D05";
    const SECRETKey = "1JfafuUI84Trrc4RKDMtIoH5FtOBJY50";
    const apiURL = "/v2/availability/slots?secretKey="+SECRETKey+"&apiKey="+APIKey+"&productId="+product.productID+"&startTime="+product.startDateTime+"&endTime="+product.endDateTime;
    const encodedURI = encodeURI(apiURL);
    const options = {
      hostname: "api.bookeo.com",
      path: encodedURI,
      method: "GET",
    };

    const req = https.request(options, (res) => {
      console.log(`statusCode: ${res.statusCode}`);

      res.on("data", (bookeoData) => {
        // do something with the data
        const data = JSON.parse(bookeoData);
        resolve(data);
      });
    });

    req.on("error", (error) => {
      console.error(error);
      reject(error);
    });

    req.end();
  });
});


exports.bookRoom = functions.https.onCall((productBookingDetails) => {
  console.log("Running Book Room Request");
  const dataString = JSON.stringify(productBookingDetails);


  return new Promise((resolve, reject)=>{
    const APIKey = "AP4AMXRXKCJTCAK4WF4TR31549KNJAK14911BF5D05";
    const SECRETKey = "1JfafuUI84Trrc4RKDMtIoH5FtOBJY50";
    const apiURL = "api.bookeo.com/v2/availability/bookings?sendCustomerThankyou=true&sendCustomerReminders=true&notifyCustomer=true&notifyUsers=true&secretKey="+SECRETKey+"&apiKey="+APIKey;
    const encodedURI = encodeURI(apiURL);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": dataString.length,
      },
    };

    const req = https.request(encodedURI, options, (res) => {
      console.log(`statusCode: ${res.statusCode}`);

      res.on("data", (bookeoData) => {
        // do something with the data
        const data = JSON.parse(bookeoData);
        resolve(data);
      });
    });

    req.on("error", (error) => {
      console.error(error);
      reject(error);
    });

    req.write(dataString);
    req.end();
  });
});


