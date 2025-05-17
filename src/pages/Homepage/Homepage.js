import React from 'react';
import './Homepage.css';
import { useNavigate } from 'react-router-dom'; // Assuming you are using React Router

const Homepage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear the authentication token from local storage
        localStorage.removeItem('authToken');
        // Redirect the user back to the login page
        navigate('/login'); // Adjust the path to your login route
    };

    return (
        <div className="homepage-container">
            <header className="homepage-header">
                <h2>Welcome to the Homepage!</h2>
                <button className="logout-button" onClick={handleLogout}>
                    Logout
                </button>
            </header>
            <main className="homepage-content">
                <p>This is a simple homepage after successful login.</p>
                {/* You can add more content here */}
            </main>
            <footer className="homepage-footer">
                <p>&copy; 2025 My Awesome App</p>
            </footer>
        </div>
    );
};

export default Homepage;