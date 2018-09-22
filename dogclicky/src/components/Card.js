import React, { Component } from 'react';

const Card = props => {
    return (
    <div onClick={() => {
        console.log(props);
        props.handleClick(props.name)}
     } style={{margin: 20}}>
        <img className="card-img" src={props.image} style={{height: 100, width: 100}} />
    </div>
    )
};

export default Card;