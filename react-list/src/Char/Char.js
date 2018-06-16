import React from 'react';
const char = (props)=>{
    const styler={
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid red',
        textAline: 'center',
        background: '#eee'
    }
    return(
        <div style={styler} onClick={props.click}>
        {props.character}
        </div>
    );
}
export default char;