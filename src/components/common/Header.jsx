import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase/firebaseConfig";
import { signOut } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const [isLogin,setIsLogin] = useState(false)

  useEffect(()=> {
    let user = auth.onAuthStateChanged((u)=>{
        if(u){
          setIsLogin(true)
        }else{
          setIsLogin(false)
        }
    })
    return () => user();
},[])

const handleLogout = () => {
    signOut(auth)
    .then(()=>{
        navigate("/login");
        setIsLogin(!isLogin)
    })
    .catch((error)=>{

    })
}


  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" href="#">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/products" className="nav-link" href="#">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" href="#">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" href="#">
                  Contact
                </Link>
              </li>
              {
                isLogin ? (<> <li className="nav-item">
                <Link to="/dashboard" className="nav-link" href="#">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <a onClick={handleLogout}  className="nav-link" href="#">
                  Log Out
                </a>
              </li></>) : <li className="nav-item">
                <Link to="/login" className="nav-link" href="#">
                  Sign In
                </Link> 
              </li> 
              }

              
              
             
          
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
  );
};

export default Header;
