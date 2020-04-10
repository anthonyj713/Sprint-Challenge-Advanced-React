import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import PlayersCard from './components/PlayersCard';

const App = () => {
  const [playersData, setPlayersData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/players')
    .then(res => {
      setPlayersData(res.data);
    })
    .catch(err => {
      console.log('error', err)
    })
   }, []);

  return (
      <body data-testid='body'>
      <div className='bigContainer' >
        <Header/>
          <div className='cardContainer'>
          {playersData.map(
          (i) => <PlayersCard className='playersCard' data={i}/>
        ) } 
        </div>
      </div>
      </body>
    );
          }
  
export default App;