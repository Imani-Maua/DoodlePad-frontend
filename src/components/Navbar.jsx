import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Navbar(){

    const { theme, toggleTheme }= useContext(ThemeContext);

    return(
        <nav className={theme === 'dark' ? 'bg-gray-800 text-white p-4' : 'bg-white text-black p-4'}>
            <div className="navigators">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/signup">Signup</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
            </div>

            <div>
                <button onClick={toggleTheme} className="ml-4 px-4 py-2 rounded">
                    {theme === 'light' ? '🌙 Dark Mode': '☀️ Light Mode'}
                </button>
            </div>
        </nav>
    )
}



export default Navbar;