import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { DbContex } from "../Context/Contex";
import { useNavigate } from "react-router-dom";
import "./Edit.css";
function Edit() {
  const navigate = useNavigate();
  const Db = useContext(DbContex);
  const params = useParams();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const editMovie = Db.list.movies.find((item) => item.id == params.id);

  console.log(editMovie);

  const onSubmit = (data) => {
    const db = { ...Db.list };
    const editedMovie = [
      (editMovie.movie = data.movie),
      (editMovie.movieImag = data.movieImag),
      (editMovie.actors = data.actors),
      (editMovie.director = data.director),
      (editMovie.movieDetail = data.movieDetail),
    ];
    // editMovie.director = director
    db.movies.push(editedMovie);
    Db.setList(db);
    navigate("/admin/Films");
  };

  return (
    <>
      <div className="editContainer">
        <form className="editForm" onSubmit={handleSubmit(onSubmit)}>
      
          <label style={{position:'relative',right:'700px'}}><h4>movie</h4></label>
          <input
            {...register("movie", { required: true })}
            placeholder="movie"
            defaultValue={editMovie.movie}
          />
          <label style={{position:'relative',right:'700px'}}><h4>poster</h4></label>
          <input
            {...register("movieImag", { required: true })}
            placeholder="poster"
            defaultValue={editMovie.movieImag}
          />  
          <label style={{position:'relative',right:'700px'}}><h4>actors</h4></label>

          <input
            {...register("actors", { required: true })}
            placeholder="actors"
            defaultValue={editMovie.actors}
          />
          <label style={{position:'relative',right:'700px'}}><h4>director</h4></label>
          <input
            {...register("director", { required: true })}
            placeholder="director"
            defaultValue={editMovie.director}
          />
            <label style={{position:'relative',right:'680px'}}><h4>about movie</h4></label>
          <input
            {...register("movieDetail", { required: true })}
            placeholder="about movie"
            defaultValue={editMovie.movieDetail}
          />
            <label style={{position:'relative',right:'680px'}}><h4>movieStory</h4></label>
          <input
            {...register("movieStory", { required: true })}
            placeholder="movie story"
            defaultValue={editMovie.movieStory}
          />
               <label style={{position:'relative',right:'700px'}}><h4>trailer</h4></label>
          <input
            {...register("trailer", { required: true })}
            placeholder="trailer"
            defaultValue={editMovie.trailer}
          />
               <label style={{position:'relative',right:'700px'}}><h4>genre</h4></label>
          <input
            {...register("genre", { required: true })}
            placeholder="genre"
            defaultValue={editMovie.genre}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Edit;
// بغل هر کدوم از اینپوت ها یک لیبل بزارم و تمومش کنم