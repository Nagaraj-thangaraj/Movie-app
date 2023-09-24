import React from "react";
import ButtonFilter from "./ButtonFilter/ButtonFilter";
import MovieComponent from "./MovieComponent/MovieComponent";
import "./HomePage.css";
function HomePage() {
  return (
    <div>
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          background: "white",
          marginTop:'0px',
          padding: "10px",
        }}
      >
        <ButtonFilter />
      </div>
      <MovieComponent />
    </div>
  );
}
export default HomePage;
