import React from 'react';
import  './Teacher.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Teacher = (props) => {
    // console.log(props)
    const {name,img,age,district,sallery,university} = props.Tutor;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='displayteacher'>
            <img  src={img} alt="" />
            <h2>Tutor Name: {name}</h2>
            <h4>Age: {age}</h4>
            <h4>District: {district}</h4>
            <h4>Tution FEE: {sallery}</h4>
            <h3>University Name: {university}</h3>
            <button 
            onClick={() => props.tutoraddtocart(props.Tutor)}
            className='button'>{element} Hire Me</button>
        </div>
    );
};

export default Teacher;