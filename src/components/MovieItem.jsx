import React from 'react';

class MovieItem extends React.Component {
  constructor() {
    super();
    this.state = {
      willWatch: false
    };
  }
  render() {
    const {movie, removeFilm, addMovieToWatch, removeFromWillWatch} = this.props
    return (
      <div>            
        <div className="card">
          <img
            className="card-img-top"
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
              movie.poster_path}`}
            alt=""
          />
          <div className="card-body">
            <h6 className="card-title">{movie.title}</h6>
            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-0">Rating: {movie.vote_average}</p>
              <button type="button" 
                      className={this.state.willWatch ? 'btn btn-success' : 'btn btn-secondary'}
                      onClick={() => {
                        this.setState({
                          willWatch: !this.state.willWatch
                        });
                        {this.state.willWatch ? removeFromWillWatch(movie) : addMovieToWatch(movie)};
                      }}
              >
                {this.state.willWatch ? "Don't " : "will "} Watch
              </button>              
              <button className="btn btn-danger"
                      onClick={() => {
                        removeFilm(movie);
                        removeFromWillWatch(movie)
                      }}
              >
                Remove film
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieItem;


// {this.state.willWatch ? (
//   <button type="button" 
//   className="btn btn-success"
//   onClick={() => {
//     this.setState({
//       willWatch: false
//     });
//     removeFromWillWatch(movie);
//   }}
//   >
//     Don't Watch
//   </button>) : (
//   <button type="button" 
//   className="btn btn-secondary"
//   onClick={() => {
//     this.setState({
//       willWatch: true
//     });
//     addMovieToWatch(movie);
//   }}
//   >
//     Will Watch
//   </button>
// )}