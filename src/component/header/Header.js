import React from 'react';
import './Header.css'
import  logo from'../../images/images.png'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <h1>Find Best Tutors </h1>
            <p>Love the Lesson Or It’s FREE *We guarantee that you’ll be satisfied with your first lesson.If not, we’ll cover it</p>
            <h1>All Tutors are Guaranteed by Us 100% Guarantee</h1>
        </div>
    );
};

export default Header;