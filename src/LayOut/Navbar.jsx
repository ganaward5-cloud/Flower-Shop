import { Link } from "react-router-dom"



export default function Navbar(){
    
    return(
        <>
        <div className="heading4">
            <h4>Our Blooms</h4>

                <div className="navbar">
                    
                    <Link to="/" >Home</Link>
                    <Link to="/about" >About</Link>
                    <Link to="/contact" >Contact</Link>
                </div>
        </div>
        </>
    )
}