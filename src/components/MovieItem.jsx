import React from 'react';

const MovieItem = (props) => {
  const {movie, removeFilm, addMovieToWatch} = props
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
                      className="btn btn-secondary"
                      onClick={addMovieToWatch.bind(null, movie)}
              >
                Will Watch
              </button>
              <button className="btn btn-danger"
                      onClick={removeFilm.bind(null, movie)}
              >
                Remove film
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MovieItem;