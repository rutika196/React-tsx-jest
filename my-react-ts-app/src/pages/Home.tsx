import { useNavigate } from "react-router-dom";


export const Home = () => {
    
    const navigate = useNavigate();
    return (
        <div>
            <h1>Home Page</h1>
            <p>This is the home page of the application.</p>
            //<button onClick={() => navigate("/about")}>Go to About Page</button>

        </div>
    );
};