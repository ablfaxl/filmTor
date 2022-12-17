import React,{useState,useContext} from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { DbContex } from '../Context/Contex';



function AddFilms() {
    const Db = useContext(DbContex);
    const navigate= useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();


      
      const onSubmit = (data) => {
        const db ={...Db.list}
        const newMovie = { ...data,id:`${new Date().getTime()}${String(Math.random()).slice(3,9)}` };
        navigate('/admin/Films')
        db.movies.push(newMovie);
        Db.setList(db);
      
      };
  return (
    <>
    <div>
    <form onSubmit={handleSubmit(onSubmit)} className="addPost">
<input 
 {...register("movie", { required: true })}
className="addPostInput" placeholder="movie name" /> 
<input
 {...register("movieImag", { required: true })}
 className="addPostInput" placeholder="movie image" /> 
<input
 {...register("actors", { required: true })}
 className="addPostInput" placeholder="actors" /> 
<input
 {...register("director", { required: true })}
  className="addPostInput" placeholder="director" /> 
<input
 {...register("movieDetail", { required: true })}
 className="addPostInput" placeholder="movie detail" /> 
<input
 {...register("movieStory", { required: true })}
 className="addPostInput" placeholder="movie story" /> 
<input
 {...register("trailer", { required: true })}
 className="addPostInput" placeholder="trailer" /> 
 

 <input
 {...register("genre",{required:true})}
 className="addPostInput" placeholder="genre" /> 
<button type="submit">Post</button>
<br/>
<br/>
<br/>
<br/> 
</form>

    </div>
    </>
  )
}

export default AddFilms