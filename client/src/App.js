import React from 'react';
import axios from 'axios';
import PlayersCard from './components/PlayersCard';


class App extends React.Component {
  constructor() {
    super();
      this.state = {
        playersData: []
      };
      console.log('constructor running');
  };

  componentDidMount(){
    axios
    .get('http://localhost:5000/api/players')
    .then(response => {
      this.setState({
        playersData: response.data
      });
        console.log(response);
    })
    .catch(error => {
      console.log('player data was not returned', error)
    })
  }

  render(){
    return (
      <div className='bigContainer'>
        {/* <div className='playerContainer'> */}
        {this.state.playersData.map(
          (i) => <PlayersCard className='playersCard' data={i}/>
        ) } 
        {/* </div> */}
      </div>
    );
  }
}

export default App;