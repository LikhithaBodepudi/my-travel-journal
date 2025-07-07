import React from 'react';
export default function Header(){
    return(
        <header className='header'>
            <i className='fa-solid fa-globe header--icon'></i>{/* This is a globe icon */}
            <h1 className="header--title">my travel journal.</h1>
        </header>
    );
}