import React from 'react';

const MovieItem = (props) => {
    return (
        <div className="row">
            <div className="col-9">
              <p>{props.movie.title}</p>
            </div>
            <div className="col-3">
              <button className="btn btn-danger"
                      onClick={props.removeFilm.bind(this, props.movie)}
              >
                Remove film
              </button>
            </div>
        </div>
    );
};

export default MovieItem;