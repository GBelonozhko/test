import React from 'react';

const person = (props) => {
    return( 
        <div>
            <p>I'm {props.name}  and i am {Math.floor(Math.random()*100)} years old no jk im {props.age}</p>
            <p>{props.children}</p>
            
        </div>
    )
}

export default person;