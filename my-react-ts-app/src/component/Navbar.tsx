import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav>
            <h2>My react app</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
};