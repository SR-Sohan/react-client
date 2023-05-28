import { createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase/firebaseConfig";

const Register = () => {
    const navigate = useNavigate();  
    useEffect(()=> {
        let user = auth.onAuthStateChanged((u)=>{
            if(u){
                navigate("/")
            }
        })
        return () => user();
    },[navigate])
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState(null);

    const handleRegister = (e) => {
        e.preventDefault();
         

        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            let user = userCredential.user;
            if(user){
                alert("user register successfuly")
                navigate("/login")
            }
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
        })
      
    }

    return(
        <>
         <form onSubmit={handleRegister} className="w-50 shadow-lg p-5 mx-auto my-5">
                <h1>Register  Form</h1>
                <p className="text-danger">{error && error}</p>
              <div>
                <label htmlFor="email">Email:</label>
                <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email" value={email} />
              </div>
              <div>
                <label htmlFor="pass">Password</label>
                <input onChange={(e)=>setPassword(e.target.value)} type="password" name="pass" id="pass" value={password} />
              </div>
              <input type="submit" value="Sing Up" />
              <p>Do you have any account? <Link to="/login">Sign In</Link> </p>
            </form>
        </>
    );
}

export default Register;