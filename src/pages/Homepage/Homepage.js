import './Homepage.css';
import { useNavigate } from 'react-router-dom'; // Assuming you are using React Router
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

const Homepage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear the authentication token from local storage
        localStorage.removeItem('authToken');
        // Redirect the user back to the login page
        navigate('/login'); // Adjust the path to your login route
    };

    /*
    return (
        <div className="homepage-container">
            <header className="homepage-header">
                <h2>Welcome to the Homepage!</h2>
                <button data-login-field="logout" className="logout-button" onClick={handleLogout}>
                    Logout
                </button>
            </header>
            <main className="homepage-content">
                <p>This is a simple homepage after successful login.</p>
                
            </main>
            <footer className="homepage-footer">
                <p>&copy; 2025 My Awesome App</p>
            </footer>
        </div>
    );
    */
    
    
    return (
        <div className="homepage-container">
            <Header title="Welcome to the Homepage!" onLogout={handleLogout} />
            <MainContent>
                <p>This is a simple homepage after successful login.</p>
                
            </MainContent>
            <Footer copyright="&copy; 2025 My Awesome App" />
        </div>
    );



};

export default Homepage;