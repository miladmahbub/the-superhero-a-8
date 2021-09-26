import React, { useEffect, useState } from 'react';
import Teacher from '../teacher/Teacher';
import Tutorcart from '../tutorcart/Tutorcart';
import './Tutor.css'

const Tutor = () => {
    const[tutors,setTutors] = useState([]);
    const [tutorhire,setTutorhire] = useState([]);

    useEffect(() =>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data =>setTutors(data));
    },[])

   const tutoraddtocart =(tutor) =>{
       console.log(tutor.name);
       // console.log('clicked');

        const newhire =[...tutorhire,tutor];
        setTutorhire(newhire);
   }


    return (
        <div className='tutor-container'>
            <div className='tutorlist'>
              {/* <h3>total tutor:{tutors.length}</h3> */}
              {
                  tutors.map(tutor =><Teacher
                  Tutor={tutor}
                  key={tutor.name}
                  tutoraddtocart={tutoraddtocart}
                  ></Teacher>)
              }
            </div>
            <div className='tutorcart'>
                <h1>Total Tutor: {tutors.length}</h1>
                <Tutorcart tutorhired={tutorhire}></Tutorcart>
                

            </div>
        </div>
    );
};

export default Tutor;