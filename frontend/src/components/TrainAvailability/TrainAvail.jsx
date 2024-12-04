
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TrainCard from './TrainCard'; 


const TrainBetweenStations = ({ fromStationCode, toStationCode, dateOfJourney }) => {
  const [trainData, setTrainData] = useState([]);
  const [error, setError] = useState('');
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    if (fromStationCode && toStationCode && dateOfJourney && !isDataFetched) {
      fetchData();
    }
  }, [fromStationCode, toStationCode, dateOfJourney, isDataFetched]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations',
        {
          params: {
            fromStationCode: fromStationCode,
            toStationCode: toStationCode,
            dateOfJourney: dateOfJourney,
          },
          // headers: {
          //   'X-RapidAPI-Key': '8a518c241cmsh1cd9e36184211d4p11b7bfjsne8534cab146d',
          //   'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
          // }
          // headers: {
          //   'X-RapidAPI-Key': '381b9cab04mshbf4f7421d84f705p18c531jsn7949aaf14b1b',
          //   'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
          // }  
          headers: {
            'X-RapidAPI-Key': 'cd1cb2b14cmshb72ec2f45c1d333p19f798jsn51eee427a17b',
            'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
          }      
        }
      );

      setTrainData(response.data.data);
      setError('');
      setIsDataFetched(true);
    } catch (error) {
      setTrainData([]);
      setError('Error fetching train data. Please try again.');
      console.error(error);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}

      {trainData.length > 0 && (
        <div>
          <h3>Train Data:</h3>
          <div className="train-card-container"> 
            {trainData.map((train) => (
              <TrainCard key={train.train_number} train={train} />
            ))}
          </div>
        </div>
      )}
    </div>
  );


};

export default TrainBetweenStations;
