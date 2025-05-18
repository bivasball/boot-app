import './Header.css'; // Create this CSS file

const Header = ({ title, onLogout }) => {
    return (
        <header className="app-header">
            <h2>{title}</h2>
            <button data-login-field="logout" className="logout-button" onClick={onLogout}>
                Logout
            </button>
        </header>
    );
};

export default Header;