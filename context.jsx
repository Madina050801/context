import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const Context = (props) => {
  const [state, setState] = useState([
    { id: 1, name: "Angel" },
    { id: 2, name: "Angel" },
    { id: 3, name: "Angel" },
    { id: 4, name: "Angel" },
  ]);
  return <MovieContext.Provider value={[state, setState]}>
      {props.children}
  </MovieContext.Provider>;
};
