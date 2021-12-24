import React, { useState, useContext } from "react";
import { MovieContext } from "./context";

export const Movie = () => {
  const [state, setState] = useContext(MovieContext);
  const onDelete = (id) => {
    let res = state.filter((vl) => vl.id !== id);
    setState(res);
  };

  return (
    <div>
      <h1>Movie</h1>
      {state.map((value) => (
        <div>
          <h1>
            {value.id} {value.name}{" "}
            <button onClick={() => onDelete(value.id)}>delete</button>
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Movie;
