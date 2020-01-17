import React from 'react';

import './Person.css';

const person = (props) => (
    
        <div className="col-md-4 personTile">
        <div className="Person">
            <h2>{props.name}</h2>
            <button type="button" className="deleteTile close" onClick={props.clicked}>
            <span aria-hidden="true">×</span>
          </button>
            <p>Age: {props.age}</p>
            <p>Age: {props.designation}</p>
        </div>
        </div>
    

);

export default person;