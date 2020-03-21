import React from 'react';
// import {moviesData} from '../moviesData';
import MovieItem from './MovieItem';
import {API_URL, API_KEY_3} from '../utils/api';
import MovieTabs from './MovieTabs';
import '../App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: 'popularity.desc'
    };
  }

  componentDidMount() {
    fetch(`${API_URL}discover/movie?api_key=${API_KEY_3}&language=en-US&sort_by=${this.state.sort_by}&include_adult=false&include_video=false&page=1`).then((response) => {
      console.log(response);
      return response.json();
    }).then((data) => {
      this.setState({
        movies: data.results
      })
    })
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

  removeMovieFromToWatch = (movie) => {
    const updateWillWatchMovies = this.state.moviesWillWatch.filter((item) => {
      return item.id !== movie.id;
    });
    this.setState({
      moviesWillWatch: updateWillWatchMovies
    })
  }
  updateSortBy = (value) => {
    this.setState({
      sort_by: value
    })
  }
  render() {
    console.log('render');
    return (
      <div className="container">
        <div className="row">
          <div className="col-9 pt-4">
            <div className="row">
              <div className="col-12 mb-3">
                <MovieTabs  sort_by={this.state.sort_by}
                            updateSortBy={this.updateSortBy}
                />
              </div>
            </div> 
            <div className="row">         
              {this.state.movies.map((movie) => {
                return ( 
                  <div className="col-12 col-lg-6 mb-3" key={movie.id}>
                    <MovieItem  movie={movie} 
                                removeFilm={this.removeFilm}
                                addMovieToWatch={this.addMovieToWatch}
                                removeFromWillWatch={this.removeMovieFromToWatch}
                    />
                  </div>
                )              
              })}
            </div>
          </div>
          <div className="col-3 pt-4">
            <p>Will Watch: {this.state.moviesWillWatch.length}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
