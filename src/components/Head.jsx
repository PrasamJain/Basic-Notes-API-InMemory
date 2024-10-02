import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header({ onSearch }) {
    const linkStyle = {
        textDecoration: 'none',
        color: 'rgb(0 0 0)',
    };

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        onSearch(e.target.value); // Pass the query to the parent (Home) component
        console.log("searchQuery",searchQuery)
    };

    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <Link to={'/'} style={linkStyle}>
                        <h2>Notes <span>Management</span> Web Application</h2>
                    </Link>
                </div>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search notes..."
                        value={searchQuery}
                        onChange={handleSearch}
                        className="search-input"
                    />
                </div>
                <div className="actions">
                    <Link to={'/about'} style={linkStyle}>
                        <button className="btn-about">About Us</button>
                    </Link>
                </div>
            </nav>
        </header>
    );
}
