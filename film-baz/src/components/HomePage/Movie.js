import ReactPaginate from "react-paginate";
import { Link, useSearchParams } from "react-router-dom";
import { List } from "../Context/Contex";

import "./HomePage.css";

function Movie() {
  const { list } = List();
  const [search, setSearch] = useSearchParams();

  const handlePageClick = (e) => {
    list.movies(e.selected);
    setSearch(`page = ${e.selected}`);
  };




  return (
    <>
      <div className="movie-div">
        {list.movies.map((item, i) => {
          return (
            <>
            <div className="textx" key={i}>
              <div>
              <Link to={`/profile/${item.id}`}>
                <img className="homePage-img" src={item.movieImag} />
              </Link>
              </div>

              <div className="item-movie">{item.movie}</div>
              <div className="movieDetail">{item.movieDetail}</div>
            </div>
              {/* <br/> */}
            </>
          );
        })}
      {/* <div className="pageHandler">
        
            <ReactPaginate
          className="pages"
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={10}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </div> */}
      </div>
    </>
  );
}
// <div className="item-movie">{item.movie}</div>
export default Movie;
