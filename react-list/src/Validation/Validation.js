import React from 'react';
const validation = (props)=>{
    let validMassedge = 'Text long enough!!';
    if(props.inputLength <=5){
        validMassedge = 'Text too short!!';
    }
    return (
        <div>
            <p>{validMassedge}</p>
        </div>
        
    )
}


export default validation;