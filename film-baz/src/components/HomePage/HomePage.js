import React,{useContext} from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";

// import { List } from "../Context/Contex";
import "./HomePage.css";
import { DbContex } from "../Context/Contex";



function HomePage() {
  const Db = useContext(DbContex);

 const homePageMovie = Db.list.movies.filter((item) => item.id >= 5)
  return (
    <>
      <div className="movie-div">
        {homePageMovie.map((item, i) => {
          return (
            <div className="textx" key={i}>
              <div>
                <Link to={`/profile/${item.id}`}>
                  <img className="homePage-img" src={item.movieImag} alt='movie photo' />
                  
                </Link>
              </div>
              <div>
              <div className="item-movie">{item.movie}</div>
              <div className="movieDetail">{item.movieDetail}
              </div>
          
              
              </div>
      
            </div>
          );
         
        })}
      </div>
    </>
  );
}

export default HomePage;

