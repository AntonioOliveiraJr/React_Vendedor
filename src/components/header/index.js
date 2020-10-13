import React from 'react';

import './styles.css';

const Header = ({ title }) => (
    <header>
        <h1> {title?title: 'App Vendedor'} </h1>
    </header>
);

export default Header;