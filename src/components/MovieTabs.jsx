import React from "react";

const MovieTabs = props => {
  const {sort_by, updateSortBy} = props;

  const handleClick = (value) => {
    return () => {
      updateSortBy(value);
    };
  };

  const getClassByValue = descr => {
    return `nav-link ${sort_by === descr ? "active" : ""}`;
  };

  return (
    <ul className="tabs nav nav-pills">
      <li className="nav-item">
        <div
          className={getClassByValue("popularity.desc")}
          onClick={handleClick("popularity.desc")}
        >
          Popularity
        </div>
      </li>
      <li className="nav-item">
        <div
          className={getClassByValue("revenue.desc")}
          onClick={handleClick("revenue.desc")}
        >
          Revenue
        </div>
      </li>
      <li className="nav-item">
        <div
          className={getClassByValue("vote_average.desc")}
          onClick={handleClick("vote_average.desc")}
        >
          Average
        </div>
      </li>
    </ul>
  );
};

export default MovieTabs;
