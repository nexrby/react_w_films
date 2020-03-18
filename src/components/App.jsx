import React from 'react';
import moviesData from '../moviesData';
import MovieItem from './MovieItem';
import '../App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData,
      moviesWillWatch: []
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
  addMovieToWatch = (movie) => {
    
    // const updateMoviesWillWatch = [...this.state.moviesWillWatch];
    // updateMoviesWillWatch.push(movie);
    
    const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];
    
    this.setState({
    moviesWillWatch: updateMoviesWillWatch
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-9"> 
            <div className="row">         
              {this.state.movies.map((movie) => {
                return ( 
                  <div className="col-12 col-lg-6 mb-3" key={movie.id}>
                    <MovieItem  movie={movie} 
                                removeFilm={this.removeFilm}
                                addMovieToWatch={this.addMovieToWatch}
                    />
                  </div>
                )              
              })}
            </div>
          </div>
          <div className="col-3">
            <p>Will Watch: {this.state.moviesWillWatch.length}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
