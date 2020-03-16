import React from 'react';
import moviesData from '../moviesData';
import '../App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData
    };
  }
  render(){

    console.log(this);
    return (
      <div className="App">
        {this.state.movies.map((movie) => {
          return <p>{movie.title}</p>
        })}
      </div>
    );
  }
}

export default App;
