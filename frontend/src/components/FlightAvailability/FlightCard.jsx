// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './FlightCard.css';

// const FlightCard = ({
//   flightCode,
//   flightName,
//   cabinType,
//   stops,
//   departureAirport,
//   departureCode,
//   departureTime,
//   departureTimezone,
//   arrivalAirport,
//   arrivalCode,
//   arrivalTime,
//   arrivalTimezone,
//   flightDuration,
//   totalCost,
//   cabinBaggageAllowance,
//   checkInBaggageAllowance,
//   bookingLink
// }) => { 
  
//   const [co2Emissions, setCo2Emissions] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const apiEndpoint = 'https://carbonsutra1.p.rapidapi.com/flight_estimate';
//       const apiKey = 'fQ98oU704xFvsnXcQLVDbpeCJHPglG1DcxiMLKfpeNEMGumlbzVf1lCI6ZBx';

//       const requestData = new URLSearchParams();

//       requestData.append('iata_airport_from', departureCode);
//       requestData.append('iata_airport_to', arrivalCode);
//       requestData.append('number_of_passengers', '411');
//       requestData.append('include_wtt', 'Y'); 
//       requestData.append('flight_class', 'economy');
//       requestData.append('round_trip', 'N');
//       requestData.append('add_rf', 'N');

//       const options = {
//         method: 'POST',
//         url: apiEndpoint,
//         headers: {
//           'content-type': 'application/x-www-form-urlencoded',
//           Authorization: `Bearer ${apiKey}`,
//           'X-RapidAPI-Key': '5b6fc2c98fmsh01a78615d2f8209p1f47bbjsn69bc20d62183',
//           'X-RapidAPI-Host': 'carbonsutra1.p.rapidapi.com'
//         },
//         data: requestData,
//       };

//       try {
//         const response = await axios(options);
//         const co2EmissionsData = response.data.data.co2e_kg;
//         setCo2Emissions(co2EmissionsData+ Math.floor(Math.random() * 1000) + 1);
//         console.log("API response:", response.data);
//         console.log("CO2 Emissions Data:", co2EmissionsData);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, [departureCode, arrivalCode]);

//   return (
//     <div className="flight-card">
//       <div className="flight-details">
//         <h3>Flight Details</h3>
//         <p>Flight Code: {flightCode}</p>
//         <p>Flight Name: {flightName}</p>
//         <p>Cabin Type: {cabinType}</p>
//         <p>Number of Stops: {stops}</p>
//       </div>
//       <div className="departure-arrival">
//         <h3>Departure and Arrival</h3>
//         <p>Departure Airport: {departureCode} - {departureAirport}</p>
//         <p>Departure Time: {departureTime} ({departureTimezone} Timezone)</p>
//         <p>Arrival Airport: {arrivalCode} - {arrivalAirport}</p>
//         <p>Arrival Time: {arrivalTime} ({arrivalTimezone} Timezone)</p>
//       </div>
//       <div className="duration">
//         <h3>Duration and Timing</h3>
//         <p>Flight Duration: {flightDuration}</p>
//       </div>
//       <div className="pricing">
//         <h3>Pricing</h3>
//         <p>Total Cost: {totalCost}</p>
//       </div>
//       <div className="baggage">
//         <h3>Baggage Information</h3>
//         <p>Cabin Baggage Allowance: {cabinBaggageAllowance}</p>
//         <p>Check-in Baggage Allowance: {checkInBaggageAllowance}</p>
//       </div>
//       <div className="co2-emissions">
//         <h3>CO2 Emissions</h3>
//         {co2Emissions !== null ? (
//           <p>CO2 Emissions: {co2Emissions} kg</p>
//         ) : (
//           <p>Loading CO2 Emissions...</p>
//         )}
//       </div>
//       <div className="booking">
//         <a href={bookingLink} target="_blank" rel="noopener noreferrer">
//           Book Now
//         </a>
//       </div>
//     </div>
//   );
// };

// export default FlightCard;

// FlightCard.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FlightCard.css';

const FlightCard = ({
  flightCode,
  flightName,
  cabinType,
  stops,
  departureAirport,
  departureCode,
  departureTime,
  departureTimezone,
  arrivalAirport,
  arrivalCode,
  arrivalTime,
  arrivalTimezone,
  flightDuration,
  totalCost,
  cabinBaggageAllowance,
  checkInBaggageAllowance,
  bookingLink
}) => { 
  const [co2Emissions, setCo2Emissions] = useState(null);

    useEffect(() => {
    const fetchData = async () => {
      const apiEndpoint = 'https://carbonsutra1.p.rapidapi.com/flight_estimate';
      const apiKey = 'fQ98oU704xFvsnXcQLVDbpeCJHPglG1DcxiMLKfpeNEMGumlbzVf1lCI6ZBx';

      const requestData = new URLSearchParams();

      requestData.append('iata_airport_from', departureCode);
      requestData.append('iata_airport_to', arrivalCode);
      requestData.append('number_of_passengers', '411');
      requestData.append('include_wtt', 'Y'); 
      requestData.append('flight_class', 'economy');
      requestData.append('round_trip', 'N');
      requestData.append('add_rf', 'N');

      const options = {
        method: 'POST',
        url: apiEndpoint,
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          Authorization: 'Bearer fQ98oU704xFvsnXcQLVDbpeCJHPglG1DcxiMLKfpeNEMGumlbzVf1lCI6ZBx',
          'X-RapidAPI-Key': 'cd1cb2b14cmshb72ec2f45c1d333p19f798jsn51eee427a17b',
          'X-RapidAPI-Host': 'carbonsutra1.p.rapidapi.com'
        },
        data: requestData,
      };

      try {
        const response = await axios(options);
        const co2EmissionsData = response.data.data.co2e_kg;
        setCo2Emissions(co2EmissionsData+ Math.floor(Math.random() * 1000) + 1);
        console.log("API response:", response.data);
        console.log("CO2 Emissions Data:", co2EmissionsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [departureCode, arrivalCode]);


  return (
    <div className="flight-card">
      <div className="flight-card-section">
        <h3>Flight Details</h3>
        <p>Flight Code: {flightCode}</p>
        <p>Flight Name: {flightName}</p>
        <p>Cabin Type: {cabinType}</p>
        <p>Number of Stops: {stops}</p>
      </div>
      <div className="flight-card-section">
        <h3>Departure and Arrival</h3>
        <p>Departure Airport: {departureCode} - {departureAirport}</p>
        <p>Departure Time: {departureTime} ({departureTimezone} Timezone)</p>
        <p>Arrival Airport: {arrivalCode} - {arrivalAirport}</p>
        <p>Arrival Time: {arrivalTime} ({arrivalTimezone} Timezone)</p>
      </div>
      <div className="flight-card-section">
        <h3>Duration and Timing</h3>
        <p>Flight Duration: {flightDuration}</p>
      </div>
      <div className="flight-card-section">
        <h3>Pricing</h3>
        <p>Total Cost: {totalCost}</p>
      </div>
      <div className="flight-card-section">
        <h3>Baggage Information</h3>
        <p>Cabin Baggage Allowance: {cabinBaggageAllowance ? cabinBaggageAllowance : "none"}</p>
        <p>Check-in Baggage Allowance: {checkInBaggageAllowance ? checkInBaggageAllowance : "none"}</p>
      </div>
      <div className="flight-card-section">
        <h3>CO2 Emissions</h3>
        {co2Emissions !== null ? (
          <p>CO2 Emissions: {co2Emissions} kg</p>
        ) : (
          <p>Loading CO2 Emissions...</p>
        )}
      </div>
      <div className="flight-card-section">
        <div className="booking">
          <a href={bookingLink} target="_blank" rel="noopener noreferrer">
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
