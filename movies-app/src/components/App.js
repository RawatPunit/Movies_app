import React from "react";
import { data } from '../data';
import Navbar from './NavBar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <div className="tabs">
          <div className="tab"> Movies </div>
          <div className="tab">Favourites</div>
        </div>

        <div className="list">
            { data.map((movie,index) =>(      //we are getting each items as (movie) and  other arg as (index) which gives index of tht movie
            <MovieCArd movie={movie} key={`movies-${index}`}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
