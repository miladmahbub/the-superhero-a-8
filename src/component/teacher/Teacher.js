import React from 'react';
import  './Teacher.css'

const Teacher = (props) => {
    // console.log(props)
    const {name,img,age,district,sallery,university} = props.Tutor;
    return (
        <div className='displayteacher'>
            <img  src={img} alt="" />
            <h1>Tutor Name: {name}</h1>
            <h2>Age: {age}</h2>
            <h3>District: {district}</h3>
            <h3>Tution FEE: {sallery}</h3>
            <h2>University Name: {university}</h2>
            <button 
            onClick={() => props.tutoraddtocart(props.Tutor)}
            className='button'>Hire Me</button>
        </div>
    );
};

export default Teacher;