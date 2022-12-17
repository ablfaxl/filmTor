import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { DbContex } from "../Context/Contex";
import NotFound from "../NotFound";
// import Dashboard from "../PanelComponents/Dashboard";
// import Users from "../PanelComponents/Users";
// import Categories from "../PanelComponents/Categories";
// import Films from '../PanelComponents/Films'
import "./PanelAdmin.css";

function PanelLayout() {
  const [user, setUser] = useState(false);
  const Db = useContext(DbContex);
  if (Db.list.currentUser[0] && Db.list.currentUser[0].isAdmin === true) {
    return (
      <>
        <header>
          <div className="Container1">
            <div className="SideBarContainer">
              <h1 style={{ color: "rgb(111, 255, 111)" }}>Dashboard</h1>
              <br />

              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Home Page
              </Link>
              <br />
              <br />
              <br />
              {Db.list.currentUser[0] &&
                Db.list.currentUser[0].isAdmin === true && (
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/admin/users"
                  >
                    users
                  </Link>
                )}

              <br />
              <br />
              <br />
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/admin/Films"
              >
                Films
              </Link>

              <br />
              <br />
              <br />

              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/admin/AddFilms"
              >
                Add Films
              </Link>
              <br />
              <br />
              <br />
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/admin/Categories"
              >
                Categories
              </Link>
            </div>
          </div>
        </header>
        <div className="contextContainer">
          <div className="table-box">
            <Outlet />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div>
        <NotFound />
      </div>
    );
    // <PanelLayout />
  }
}

export default PanelLayout;
