import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react"
import { NavLink,BrowserRouter,Routes,Route } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from 'firebase/auth';

const LogIn = () =>{
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    const navigate = useNavigate()

    const onLogin = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/barcodescanner")
          console.log(user);
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
      });
     
  }

    return(
        <>
        <div className='container-fluid backround-primary '>
        <div className="container p-5">
            <div className='container p-4 text-center'>
                <h1>Check Out App</h1>
            </div>
        <form>
        <div className="form-group text-center">
          <label for="exampleInputEmail1">Email address</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div className="form-group text-center">
          <label for="exampleInputPassword1">Password</label>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <p>Rember Me</p>
        </div>
        <div>
          <NavLink to='signup'><p>Dont have and account?Signup here!</p></NavLink>
        </div>
        <div className='container text-center'>
        <button onClick={onLogin} type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
        </div>
        </div>
        </>
    )
}

export default LogIn