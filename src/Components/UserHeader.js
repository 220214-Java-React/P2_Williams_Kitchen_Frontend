import { Link } from 'react-router-dom'



export default function UserHeader() {
    return (
        <header className="navhome">
        
            
            <nav>
                <a><Link to="/">Sign Out</Link></a>
                <a><Link to="/Submit">Submit Recipe</Link></a>
            </nav>

        </header>
    )
}