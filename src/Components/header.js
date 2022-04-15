import { Link } from 'react-router-dom'



export default function Header() {
    return (
        <header className="navhome">
        
            <nav>
                <a><Link to="/">Home</Link></a>
                <a><Link to="/Submit">Submit Recipe</Link></a>
            </nav>
            
            <nav>
                <a><Link to="/login">Login</Link></a>
                <span>/</span>
                <a><Link to ="/Register">Register</Link></a>
            </nav>

        </header>
    )
}