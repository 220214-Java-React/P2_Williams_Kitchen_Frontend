import { Link, useLocation } from 'react-router-dom'



export default function UserHeader() {
    const location = useLocation();
    const state = location.state

    return (
        <header className="navhome">
        
            
            <nav>
                <a><Link to="/">Sign Out</Link></a>
                <a><Link to ="/" state={state}>Home</Link></a>
                <a><Link to="/Submit">Submit Recipe</Link></a>
            </nav>

        </header>
    )
}