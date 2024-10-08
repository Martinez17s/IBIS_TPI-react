import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <h1>IBIS</h1>
            </div>
            <button className="login-button">
                <a href="/login">Iniciar sesión</a>
            </button>
        </header>
    );
};

export default Header;
