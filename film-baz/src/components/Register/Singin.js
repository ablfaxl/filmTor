import { Link, useNavigate } from "react-router-dom";
import "./SingIn.css";
import { useForm } from "react-hook-form";
import { List } from "../Context/Contex";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";
import { DbContex } from "../Context/Contex";

export default function Singin() {
  const navigate = useNavigate();
  const UID = () =>
    `${new Date().getTime()}${String(Math.random()).slice(3, 9)}`;
  // const { list } = List();
  const Db = useContext(DbContex);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (errors.name) {
    toast("Fill the First Name", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  if (errors.name) {
    toast("Fill the Last Name", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  if (errors.Email) {
    toast("Fill the Email", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  if (errors.password) {
    toast("Fill the Password", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  if (errors.password) {
    toast("Confirm your Password", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  const onSubmit = (data) => {
    const db = { ...Db.list };
    // console.log(db.Users)
    const newUser = {
      ...data,id:`${new Date().getTime()}${String(Math.random()).slice(3,9)}`
    };
    db.Users.push(newUser);
    Db.setList(db);
    navigate('/Register/log-in')
  };
  //  console.log(onSubmit.data);
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const singUp = () =>{
  //   const Obj={

  //     firstName:firstName,
  //     password:password,
  //     email: email,
  //     lastName: lastName,
  //     id: UID(),
  //   }
  //   Db.addUser(Obj)
  // }

  return (
    <div className="singinDiv">
      <ToastContainer />
      <div className="singin-form">
        <form className="sing-up-form" onSubmit={handleSubmit(onSubmit)}>
          <p>First Name</p>
          <input
            {...register("firstName", { required: true })}
            type="Text"
            placeholder="First Name"
            //  onChange={(event) => setFirstName(event.target.value)}
          />
          {/* {errors.firstName && <p> ali  </p>} */}
          <p>Last Name</p>
          <input
            {...register("lastName", { required: true })}
            type="Text"
            placeholder="Last Name"
            // onChange={(event) => setLastName(event.target.value)}
          />
          <span>E-mail</span>
          <input
            {...register("email", { required: true })}
            // type="email"
            placeholder="E-mail"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            // onChange={(event) => setEmail(event.target.value)}
          />
          <p>Password</p>
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Password"
            //  onChange={(event) => setPassword(event.target.value)}
          />
          <p>Confirm Password</p>
          <input type="password" placeholder="Confirm Password" />
          <div style={{display:'flex',justifyContent:'flex-end'}}>

          <button
            className="btnSingin"
            type="submit"
            //  onClick={singUp}
            >sing up</button>
    
          <p className="pp">Do you have an Acount? Log in</p>
          <br/>
          <br/>

          <Link className="pp" to={"/Register/log-in"}>
            <p>Click here</p>
          </Link>
            </div>
        </form>
      </div>
    </div>
  );
}
