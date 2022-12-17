import { Link, useNavigate } from "react-router-dom";
import { DbContex, List } from "../Context/Contex";
import { useForm } from "react-hook-form";
import "./login.css";
import { useContext, useState } from "react";

function Login() {
  const Db = useContext(DbContex);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    const usercheck = Db.list.Users.find(
      (item) => item.email === data.email && item.password === data.password
    );

    // console.log(usercheck);
    if (usercheck) {
      const currentUser = { ...Db.list };
      currentUser.currentUser.push(usercheck);
      Db.setList(currentUser);
      navigate("/");
    } else {
      alert("Register first!!!");
      console.log("wrong!");
    }
  };

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const logIn = () =>{
  //   const Obj={
  //     email:email,
  //     password: password,
  //   }
  //   Db.addUser(Obj)
  // }

  return (
    <>
      <div className="loginDiv">
        <div className="login-form">
          <h1>Login Form</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <p>user name</p>
            <input
              // onChange={(event) => setEmail(event.target.value)}
              {...register("email", { required: true })}
              type="Text"
              placeholder="Your E-mail"
            />
            <p>Password</p>
            <input
              // onChange={(event) => setPassword(event.target.value)}
              {...register("password", { required: true })}
              type="password"
              placeholder="******"
            />
            <button
              // onClick={logIn}
              type="submit"
            >
              Log in
            </button>
          </form>
          Don't have acount Sing in now!
          <br />
          <Link to="/Register/sing-in">Click to Register</Link>
        </div>
      </div>
    </>
  );
}

export default Login;
