// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate("/");
  //   }, 3000);
  // }, []);
  return (
    <div className="notfound">
      <img
        className="img-404"
        alt="404 NOT FOUND"
        src="https://s6.uupload.ir/files/image_processing20191014-8473-buuha6_dvun.jpg"
      />
      <h1 style={{textAlign:"center"}}>Back to Home Page</h1>
      <Link style={{textDecoration:'none',position:'relative',left:"700px",fontSize:'30px'}} to='/'>Click Here</Link>
    </div>
  );
}
export default NotFound;
// az set time out hr ja esttefade nkinim
// msl inja ...