import { useParams } from "react-router-dom";

export const Profile =() => {
    const { id } = useParams<{ id: string }>();
    return (
        <div>
            <h1>Profile page</h1>
            <p>Profile ID: {id}</p>
        </div>
    );
};