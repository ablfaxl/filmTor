import "./Layout.css";
import React, { useState, useContext } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import {
  FaBeer,
  FaInstagram,
  FaTelegram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
// import { List } from "../Context/Contex";
import { DbContex } from "../Context/Contex";

function Layout() {
  const [input, setInput] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const Db = useContext(DbContex);
  // const { list } = List();

  const logOut = () => {
    const currentUser = { ...Db.list };
    currentUser.currentUser.splice(0, 1);
    Db.setList(currentUser);
    navigate("/");
  };


  // const searchBox = ()=>{
  //   const db = {...Db.list}
  //   const filterMovies = db.movies.filter((val) => {
  //     if (input == "") {
  //       return val;
  //     } else if (
  //       val.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
  //     ) {
  //       return val;
  //     }
  //   });

  //   Db.setList(db)
  // }

  return (
    <>
      <header>
        <div className="header-div">
          <BiMoviePlay className="header-icon" />
          <img src="/public/img/images.png" className="image_nav" />
          <Link className="link-header" to="/">
            <p>Film Baz</p>
          </Link>

          <Link className="link-header" to="/movie">
            <p>Movie</p>
          </Link>
          {Db.list.currentUser[0] &&
          //  Db.list.currentUser[0].isAdmin===true&&
        (
            <Link className="link-header" to="/admin">
              <p>panel </p>
            </Link>
          )}

{/* <Link className="link-header" to='/Register/log-in'>Log in</Link> */}


          {!Db.list.currentUser[0] ? (
            <Link className="link-header" to="/Register/sing-in">
              <p>sing in </p>
            </Link>
          ) : (
            <Link
              className="link-header"
              onClick={() => {
                logOut();
              }}
            >
              log out
            </Link>
          )}
          
          <input
            icon="search"
            type="search"
            className="search-box"
            placeholder="Searach..."
            // onChange={searchBox}
            // value={searchBox}
          />
        </div>
      </header>

      <Outlet />

      <footer>
        <section className="footer-div">
          <div className="footerContainer">
            <div className="socailContainer">
              <li>
                <a href="https://www.instagram.com/">
                  <FaInstagram style={{ color: "white" }} />
                </a>
              </li>

              <li>
                <a href="https://www.telegram.org">
                  <FaTelegram style={{ color: "white" }} />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/">
                  <FaYoutube style={{ color: "white" }} />
                </a>
              </li>

              <li>
                <a href="https://www.twitter.com/">
                  <FaTwitter style={{ color: "white" }} />
                </a>
              </li>
            </div>
            <div className="link-footer">
              <Link className="link-header" to="/About">
                About us
              </Link>
              <Link className="link-header" to="/Contact">
                Contact
              </Link>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
export default Layout;
