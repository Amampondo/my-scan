import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react"
import { NavLink,BrowserRouter,Routes,Route } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom"

const SignUp=()=>{
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault()
       
        await createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log(user);
              navigate("/login")
              // ...
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
              alert("Sign Up Failed")
              // ..
          });
        }

    return(
        <div className="mt-5">
        <div className='container-fluid bg-dark text-white'>
        <div className="container p-5">
            <div className='container p-4 text-center '>
                <h1>SignUp</h1>
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
          <p>I agree to the <a>terms and conditions</a></p>
        </div>
        <div classNameName='col p-4'>
        <button onClick={onSubmit}type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
        </div>
        </div>
        </div>
    )
}


export default SignUp