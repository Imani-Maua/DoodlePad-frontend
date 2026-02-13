import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Navbar() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className={theme === 'dark' ? 'bg-gray-800 text-white p-4' : 'bg-white text-black p-4'}>
            <div className="flex justify-between items-center">
                <div className="navigators flex gap-4">
                    <Link to="/dashboard" className="hover:underline">Dashboard</Link>
                    <Link to="/login" className="hover:underline">Login</Link>
                    <Link to="/signup" className="hover:underline">Signup</Link>
                </div>

                <button onClick={toggleTheme} className="ml-4 px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">
                    {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
                </button>
            </div>
        </nav>
    )
}

export default Navbar;