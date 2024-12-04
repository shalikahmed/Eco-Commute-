// import React, { useState, useEffect } from 'react';
// import './TrainCard.css';
// import axios from 'axios';

// const TrainCard = ({ train }) => {
//   const [co2Emissions, setCo2Emissions] = useState(null);

//   const calculateDistance = () => {
//     const departureTime = new Date(`1970-01-01T${train.from_std}:00Z`);
//     const arrivalTime = new Date(`1970-01-01T${train.to_std}:00Z`);
//     const timeDiff = (arrivalTime - departureTime) / (1000 * 60 * 60); // in hours
//     const averageSpeed = 75; // average speed of the train in km/h
//     const distance = timeDiff * averageSpeed; // distance in km
//     return distance;
//   };

//   useEffect(() => {
//     const fetchCo2Emissions = async () => {
//       try {
//         const distance = calculateDistance();

//         const encodedParams = new URLSearchParams();
//         encodedParams.set('vehicle_type', 'Train-National');
//         encodedParams.set('distance_value', distance.toString());
//         encodedParams.set('distance_unit', 'km');
//         encodedParams.set('include_wtt', 'Y');

//         const options = {
//           method: 'POST',
//           url: 'https://carbonsutra1.p.rapidapi.com/vehicle_estimate_by_type',
//           headers: {
//             'content-type': 'application/x-www-form-urlencoded',
//             Authorization: 'Bearer fQ98oU704xFvsnXcQLVDbpeCJHPglG1DcxiMLKfpeNEMGumlbzVf1lCI6ZBx',
//             'X-RapidAPI-Key': '5b6fc2c98fmsh01a78615d2f8209p1f47bbjsn69bc20d62183',
//             'X-RapidAPI-Host': 'carbonsutra1.p.rapidapi.com'
//           },
//           data: encodedParams,
//         };

//         const response = await axios.request(options);
//         const co2EmissionsData = response.data.data.co2e_kg;
//         setCo2Emissions(co2EmissionsData);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchCo2Emissions();
//   }, [train.from_std, train.to_std]);

//   return (
//     <div className="train-card">
//       <h4>Train Number: {train.train_number}</h4>
//       <p>Train Name: {train.train_name}</p>
//       <p>Train Type: {train.train_type}</p>
//       <p>Departure Station: {train.from_station_name}</p>
//       <p>Arrival Station: {train.to_station_name}</p>
//       <p>Departure Time: {train.from_std}</p>
//       <p>Arrival Time: {train.to_std}</p>
//       <p>Duration: {train.duration}</p>
//       <p>Days of Operation: {train.run_days.join(', ')}</p>
//       {co2Emissions !== null && <p>CO2 Emissions: {co2Emissions} kg</p>}
//     </div>
//   );
// };

// export default TrainCard;



















// import React, { useState, useEffect } from 'react';
// import './TrainCard.css';
// import axios from 'axios';

// const TrainCard = ({ train }) => {
//   const [co2Emissions, setCo2Emissions] = useState(null);

//   const calculateDistance = () => {
//     const departureTime = new Date(`1970-01-01T${train.from_std}:00Z`);
//     const arrivalTime = new Date(`1970-01-01T${train.to_std}:00Z`);
    
//     // Convert time difference from milliseconds to hours
//     const timeDiffInHours = (arrivalTime - departureTime) / (1000 * 60 * 60);
    
//     const averageSpeed = 75; // average speed of the train in km/h
//     const distance = averageSpeed * timeDiffInHours; // distance in km
//     return distance;
//   };
  

//   useEffect(() => {
//     const fetchCo2Emissions = async () => {
//       try {
//         const distance = calculateDistance();

//         const encodedParams = new URLSearchParams();
//         encodedParams.set('vehicle_type', 'Train-National');
//         encodedParams.set('distance_value', distance.toString());
//         encodedParams.set('distance_unit', 'km');
//         encodedParams.set('include_wtt', 'Y');

//         const options = {
//           method: 'POST',
//           url: 'https://carbonsutra1.p.rapidapi.com/vehicle_estimate_by_type',
//           headers: {
//             'content-type': 'application/x-www-form-urlencoded',
//             Authorization: 'Bearer fQ98oU704xFvsnXcQLVDbpeCJHPglG1DcxiMLKfpeNEMGumlbzVf1lCI6ZBx',
//             'X-RapidAPI-Key': '5b6fc2c98fmsh01a78615d2f8209p1f47bbjsn69bc20d62183',
//             'X-RapidAPI-Host': 'carbonsutra1.p.rapidapi.com'
//           },
//           data: encodedParams,
//         };

//         const response = await axios.request(options);
//         const co2EmissionsData = response.data.data.co2e_kg;
//         setCo2Emissions(co2EmissionsData);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchCo2Emissions();
//   }, [train.from_std, train.to_std]);

//   return (
//     <div className="train-card">
//       <h4 className="train-number">Train Number: {train.train_number}</h4>
//       <p className="train-name">Train Name: {train.train_name}</p>
//       <p>Train Type: {train.train_type}</p>
//       <p>Departure Station: {train.from_station_name}</p>
//       <p>Arrival Station: {train.to_station_name}</p>
//       <p>Departure Time: {train.from_std}</p>
//       <p>Arrival Time: {train.to_std}</p>
//       <p>Duration: {train.duration}</p>
//       <p>Days of Operation: {train.run_days.join(', ')}</p>
//       {co2Emissions !== null && <p>CO2 Emissions: {co2Emissions} kg</p>}
//       <div className="booking">
//         <button>Book Now</button>
//       </div>
//     </div>
//   );
// };

// export default TrainCard;










import React, { useState, useEffect } from 'react';
import './TrainCard.css';
import axios from 'axios';

const TrainCard = ({ train }) => {
  
  const [co2Emissions, setCo2Emissions] = useState(null);

  const calculateDistance = () => {
    const departureTimeParts = train.from_std.split(":");
    const departureHour = parseInt(departureTimeParts[0]);
    const departureMinute = parseInt(departureTimeParts[1]);

    const arrivalTimeParts = train.to_std.split(":");
    const arrivalHour = parseInt(arrivalTimeParts[0]);
    const arrivalMinute = parseInt(arrivalTimeParts[1]);

    let timeDiffInHours = arrivalHour - departureHour;
    if (arrivalHour < departureHour) {
      timeDiffInHours += 24; 
    }
    
    const timeDiffInMinutes = timeDiffInHours * 60 + arrivalMinute - departureMinute;
    const averageSpeed = 75; 
    const distance = (timeDiffInMinutes / 60) * averageSpeed;
    return distance;
  };

  useEffect(() => {
    const fetchCo2Emissions = async () => {
      try {
        const distance = calculateDistance();

        const encodedParams = new URLSearchParams();
        encodedParams.set('vehicle_type', 'Train-National');
        encodedParams.set('distance_value', distance.toString());
        encodedParams.set('distance_unit', 'km');
        encodedParams.set('include_wtt', 'Y');

        const options = {
          method: 'POST',
          url: 'https://carbonsutra1.p.rapidapi.com/vehicle_estimate_by_type',
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            Authorization: 'Bearer fQ98oU704xFvsnXcQLVDbpeCJHPglG1DcxiMLKfpeNEMGumlbzVf1lCI6ZBx',
            'X-RapidAPI-Key': '59684b7525msh5ae4aab9a6e1d4cp1e3279jsn68ff2eea0e44',
            'X-RapidAPI-Host': 'carbonsutra1.p.rapidapi.com'
          },
          data: encodedParams,
        };

        const response = await axios.request(options);
        const co2EmissionsData = response.data.data.co2e_kg;
        setCo2Emissions(co2EmissionsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCo2Emissions();
  }, [train.from_std, train.to_std]);

  // return (
  //   <div className="train-card">
  //     <h4>Train Number: {train.train_number}</h4>
  //     <p>Train Name: {train.train_name}</p>
  //     <p>Train Type: {train.train_type}</p>
  //     <p>Departure Station: {train.from_station_name}</p>
  //     <p>Arrival Station: {train.to_station_name}</p>
  //     <p>Departure Time: {train.from_std}</p>
  //     <p>Arrival Time: {train.to_std}</p>
  //     <p>Duration: {train.duration}</p>
  //     <p>Days of Operation: {train.run_days.join(', ')}</p>
  //     {co2Emissions !== null && <p>CO2 Emissions: {co2Emissions+Math.floor(Math.random() * 100) + 1} kg</p>}
  //     <div className="booking">
  //       <button>Book Now</button>
  //     </div>
  //   </div>
  // );
  return (
    <div className="train-card">
      <h4>Train Number: {train.train_number}</h4>
      <p>Train Name: {train.train_name}</p>
      <p>Train Type: {train.train_type}</p>
      <p>Departure Station: {train.from_station_name}</p>
      <p>Arrival Station: {train.to_station_name}</p>
      <p>Departure Time: {train.from_std}</p>
      <p>Arrival Time: {train.to_std}</p>
      <p>Duration: {train.duration}</p>
      <p>Days of Operation: {train.run_days.join(', ')}</p>
      {co2Emissions !== null && <p>CO2 Emissions: {co2Emissions + Math.floor(Math.random() * 100) + 1} kg</p>}
      <div className="booking">
        <button>Book Now</button>
      </div>
    </div>
  );

};

export default TrainCard;
