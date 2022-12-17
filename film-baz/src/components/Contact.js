import React from "react";
// import './Contact.css'
import { useForm } from "react-hook-form";
function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) =>{
    console.log(data)
  }
  return (
    <>
    <h1>Contact Us</h1>
      <form onSubmit={handleSubmit(onsubmit)}>
        <p>name</p>
        <input {...register("name", { required: true })} type='text' placeholder="name" />
        <p>Phone Number</p>
        <input {...register('phoneNumber', {required:true})} type="tel" placeholder="telephone"/>
        <p>Email</p>
            <input {...register("email", { required: true })}  type='Text' placeholder="Email" />
            <ol><h4>Topic</h4></ol>
            <li style={{listStyle:'none'}}> request for movie  <input type={"checkbox"} /></li>
            <li style={{listStyle:'none'}}> Crash report  <input type={"checkbox"} /></li>
            <li style={{listStyle:'none'}}> Criticism and suggestion  <input type={"checkbox"} /></li>
           <input type='text' style={{height:'250px'}}/>
           <br />
           <button type={"submit"}>Register a comment</button>
            
      </form>
    </>
  );
}

export default Contact;
