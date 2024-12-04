import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FlightCard from './FlightCard'; 
import './FlightCard.css'; // Import your CSS file

const FlightAvail = ({ from, to, date, adult }) => {
  const [flightData, setFlightData] = useState([]);
  const [error, setError] = useState('');
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    if (!isDataFetched) {
      fetchData();
    }
  }, [isDataFetched]);

  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: 'https://flight-fare-search.p.rapidapi.com/v2/flights/',
      params: {
        from: from,
        to: to,
        date: date,
        adult: adult
      },
      // headers: {
      //   'X-RapidAPI-Key': '833413ca9emsh702ba4816753a4fp19aeabjsna9167c5be1cf',
      //   'X-RapidAPI-Host': 'flight-fare-search.p.rapidapi.com'
      // }
      // headers: {
      //   'X-RapidAPI-Key': '8a518c241cmsh1cd9e36184211d4p11b7bfjsne8534cab146d',
      //   'X-RapidAPI-Host': 'flight-fare-search.p.rapidapi.com'
      // }
      // headers: {
      //   'X-RapidAPI-Key': '381b9cab04mshbf4f7421d84f705p18c531jsn7949aaf14b1b',
      //   'X-RapidAPI-Host': 'flight-fare-search.p.rapidapi.com'
      // }    
      headers: {
        'x-rapidapi-key': '59684b7525msh5ae4aab9a6e1d4cp1e3279jsn68ff2eea0e44',
        'x-rapidapi-host': 'flight-fare-search.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response)
      setFlightData(response.data.results);
      setError('');
      setIsDataFetched(true);
      console.log(response.data);

    } catch (error) {
      setFlightData([]);
      setError('Error fetching flight data. Please try again Test');
      console.error(error);

    }
  };
  

  return (

    
    <div>
      {error && <p>{error}</p>}

      {flightData.length > 0 && (
        <div>
          <h3>Flight Search Results:</h3>
          <div className="flight-cards-container">
            {flightData.map((flight) => (
              flight && <FlightCard
                key={flight.id}
                flightCode={flight.flight_code}
                flightName={flight.flight_name}
                cabinType={flight.cabinType}
                stops={flight.stops}
                departureAirport={flight.departureAirport.city}
                departureCode={flight.departureAirport.code}
                departureTime={flight.departureAirport.time}
                departureTimezone={flight.departureAirport.timeZone}
                arrivalAirport={flight.arrivalAirport.city}
                arrivalCode={flight.arrivalAirport.code}
                arrivalTime={flight.arrivalAirport.time}
                arrivalTimezone={flight.arrivalAirport.timeZone}
                flightDuration={flight.duration.text}
                totalCost={`${flight.totals.total} ${flight.currency}`}
                cabinBaggageAllowance={flight?.baggage?.cabin?.allowance}
                checkInBaggageAllowance={flight?.baggage?.checkIn?.allowance}
                bookingLink={flight.bookingLink}
                
              />
              
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightAvail;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import FlightCard from './FlightCard'; 
// import './FlightCard.css';

// const FlightAvail = ({ from, to, date, adult }) => {
//   const [flightData, setFlightData] = useState([]);
//   const [error, setError] = useState('');
//   const [isDataFetched, setIsDataFetched] = useState(false);

//   useEffect(() => {
//     if (!isDataFetched) {
//       fetchData();
//     }
//   }, [isDataFetched]);

//   const fetchData = async () => {
//     const options = {
//       method: 'GET',
//       url: 'https://flight-fare-search.p.rapidapi.com/v2/flights/',
//       params: {
//         from: from,
//         to: to,
//         date: date,
//         adult: adult
//       },
//       headers: {
//         'X-RapidAPI-Key': '8a518c241cmsh1cd9e36184211d4p11b7bfjsne8534cab146d',
//         'X-RapidAPI-Host': 'flight-fare-search.p.rapidapi.com'
//       }
//     };
  
//     try {
//       const response = await axios.request(options);
//       const flightsWithEmissions = response.data.results.map((flight) => ({
//         ...flight,
//         co2Emissions: flight.co2Emissions + Math.floor(Math.random() * 1000) + 1
//       }));
//       const sortedFlights = flightsWithEmissions.sort((a, b) => {
//         return a.co2Emissions - b.co2Emissions;
//       });
//       setFlightData(sortedFlights);
//       setError('');
//       setIsDataFetched(true);
//     } catch (error) {
//       setFlightData([]);
//       setError('Error fetching flight data. Please try again.');
//       console.error(error);
//     }
//   };
  

//   return (
//     <div>
//       {error && <p>{error}</p>}

//       {flightData.length > 0 && (
//         <div>
//           <h3>Flight Search Results:</h3>
//           <div className="flight-cards-container">
//             {flightData.map((flight) => (
//               <FlightCard
//                 key={flight.id}
//                 flightCode={flight.flight_code}
//                 flightName={flight.flight_name}
//                 cabinType={flight.cabinType}
//                 stops={flight.stops}
//                 departureAirport={flight.departureAirport.city}
//                 departureCode={flight.departureAirport.code}
//                 departureTime={flight.departureAirport.time}
//                 departureTimezone={flight.departureAirport.timeZone}
//                 arrivalAirport={flight.arrivalAirport.city}
//                 arrivalCode={flight.arrivalAirport.code}
//                 arrivalTime={flight.arrivalAirport.time}
//                 arrivalTimezone={flight.arrivalAirport.timeZone}
//                 flightDuration={flight.duration.text}
//                 totalCost={`${flight.totals.total} ${flight.currency}`}
//                 cabinBaggageAllowance={flight.baggage.cabin.allowance}
//                 checkInBaggageAllowance={flight.baggage.checkIn.allowance}
//                 bookingLink={flight.bookingLink}
//                 co2Emissions={flight.co2Emissions} // Add this prop
//               />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FlightAvail;
