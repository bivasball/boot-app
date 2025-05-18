import './Footer.css'; // Create this CSS file

const Footer = ({ copyright }) => {
    return (
        <footer className="app-footer">
            <p>{copyright}</p>
        </footer>
    );
};

export default Footer;