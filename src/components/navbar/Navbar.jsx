import { useEffect, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {}, [user]);
  
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>Renting Web</span>
        </a>
        <a href="/">Home</a>
        <Link to="/list">Properties</Link>
        <a href="/">About</a>
        <a href="/">Contact</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>John Doe</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/login">Sign in</Link>
            <Link to="/register" className="register">Sign up</Link>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          {user && (
            <a href="/profile" className="profile">Profile</a>
          )}

          <a href="/list">Properties</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          
          {!user && (
            <>
              <a href="/login">Sign in</a>
              <a href="/register">Sign up</a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
