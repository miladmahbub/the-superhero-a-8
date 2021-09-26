import React from 'react';
import './Tutorcart.css'

const Tutorcart = (props) => {
    const {tutorhired} = props;
    let total = 0;
    for(const tutor of tutorhired){
        total = total + tutor.sallery;
    }
    return (
        <div>
            
             <h2> Tutor Hire Total:{props.tutorhired.length}</h2>
             <h4>Total Salary:{total}</h4>
             
        </div>
    );
};

export default Tutorcart;