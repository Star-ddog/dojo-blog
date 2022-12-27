import { Link } from 'react-router-dom';
import React from 'react';
const Navbar = () => {
    const see = ({
        color: "white",
        backgroundColor: "#f1356d",
        borderRadius: "8px"
    })
    return (  
        <nav className="navbar">
          <h1>The Stardog Blog</h1>
          <div className="links">
              <Link to="/">Home</Link>
              <Link to="/create" style={see}>New Blog</Link>
              </div>  

        </nav>
    );
}
 
export default Navbar;