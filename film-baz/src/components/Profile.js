// import { useContext } from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { List } from "./Context/Contex";
import "./Profile.css";
function Profile() {
  const params = useParams();

  const { list } = List();

  const findMovie = list.movies.filter((item) => item.id == params.id);

  return (
    <div className="profile-container">
      <div className="profile-text">
        <h1 style={{fontSize:'30px'}}>{findMovie[0].movie}</h1>
        <br/>
        <h2>genre:{findMovie[0].genre}</h2>
        <br/>
        <h3>Actors:{findMovie[0].actors}</h3>
        <br/>

        <h4>Director:{findMovie[0].director}</h4>
        <br />
        <h4>{findMovie[0].movieStory}</h4>
        <br/>
        <Link style={({ textDecoration: "none" }, { color: "red" })} to="/">
          Back to Home Page
        </Link>
      </div>
      <div>
        <video
          className="videoTrailer"
          controls
          src={findMovie[0].trailer}
        ></video>
      </div>
    </div>
  );
}
export default Profile;
