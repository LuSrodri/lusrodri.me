import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const divStyle = {
    color: 'black',
    paddingTop: '5vmin',
    paddingBottom: '2.5vmin',
};

export function Projects() {
    return (
        <div className="home w-100" style={divStyle}>
            <h3 style={{fontWeight: 'bolder', color: '#1C3144'}}>Projetos:</h3>
        </div>
    );
}