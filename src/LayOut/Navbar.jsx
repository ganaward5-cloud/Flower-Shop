import { Link } from "react-router-dom"
import '../Style/Navbar.css'


export default function Navbar(){
    
    return(
        <>
        <div className="navbar-container">
            <h4 className="navbar-logo">Our Blooms®</h4>

                <div className="navbar-links">

                    <Link to="/"  className="navbar-link">Home</Link>
                    <Link to="/about" className="navbar-link" >About</Link>
                    <Link to="/gallery" className="navbar-link"  >Gallery</Link>
                </div>
        </div>
        </>
    )
}