import './MainContent.css'; // Create this CSS file

const MainContent = ({ children }) => {
    return (
        <main className="app-content">
            {children}
        </main>
    );
};

export default MainContent;