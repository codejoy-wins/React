import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style = {headerStyle}>
            <h1>TodoList</h1>
            <Link style= {linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    backgroundColor: "gold",
    opacity: .75,
    textDecoration: 'none',
    padding: '3px'
}

export default Header;