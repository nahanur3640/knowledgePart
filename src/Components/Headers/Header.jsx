import React from 'react';
import profile from '../../assets/image/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 mx-4 border-b-2'>
            <h1 className='text-4xl font-bold'>Knoelage Cafe</h1>
            <img src={ profile} alt="" />
        </header>
    );
};

export default Header;