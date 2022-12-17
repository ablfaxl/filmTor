import React, { useContext, useState } from "react";
import { DbContex } from "../Context/Contex";
import './Films.css'
import {AiFillDelete} from 'react-icons/ai'
import{FiEdit2} from 'react-icons/fi'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Films() {
  // const [modal, setModal] = useState(false);
  const Db = useContext(DbContex);
  const deleteFilm = (id) =>{
    const db ={...Db.list}
    db.movies.splice(id, 1)
    Db.setList(db)
  }




  const newTr = Db.list.movies.map((item, i) => {
    return (
      <tr className='trContainer' key={i}>
        <td > {item.movie} </td>
        <td> {item.movieImag} </td>
        <td> {item.trailer} </td>
        <td> {item.actors} </td>
        <td> {item.director} </td>
        <td> {item.movieDetail} </td>
        <td style={{cursor:'pointer'}}
        >    <Link to={`/admin/edit/${item.id}`}><FiEdit2/></Link>
        </td>

        <td style={{cursor:'pointer'}} onClick={()=>deleteFilm(i)}><AiFillDelete/></td>
      </tr>
      
      );
    });
  return (
    <>
    <div>
<table>
  <thead className='userInfo'>
    <tr>
    <th>Film</th>
    <th>Poster</th>
    <th>Trailer</th>
    <th>Actors</th>
    <th>Director</th>
    <th>About Movie</th>
    <th>Edit</th>
    <th>Delete</th>
  
    </tr>
  </thead>
  <tbody>
    {newTr}
  </tbody>
  
</table>
<br/>

</div>
    </>
  );
}

export default Films;
