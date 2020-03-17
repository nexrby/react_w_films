import React from 'react';
import moviesData from '../moviesData';
import MovieItem from './MovieItem';
import '../App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData
    };
  }

  removeFilm = (movie) => {
    const updateMovies = this.state.movies.filter((item) => {
      return item.id !== movie.id;
    });
    this.setState({
      movies: updateMovies
    })
  }

  render() {
    return (
      <div className="container">
        {this.state.movies.map((movie) => {
          return <MovieItem key={movie.id} 
                            movie={movie} 
                            removeFilm={this.removeFilm} 
                  />
        })}
      </div>
    );
  }
}

export default App;
