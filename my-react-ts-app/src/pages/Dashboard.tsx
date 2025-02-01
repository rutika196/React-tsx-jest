import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
    const navigate = useNavigate();
   

    const goToProfile = (userId: number) => {
        navigate(`/profile/${userId}`);
        
    };
    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick = {() => goToProfile(101)}>View profile 101</button>
        </div>
    );
};