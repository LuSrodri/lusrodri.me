import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const divStyle = {
    backgroundColor: '#1C3144',
    color: '#F3D8C7',
    paddingTop: '5vmin',
    paddingBottom: '2.5vmin',
};

export function Footer() {
    return (
        <div className="home w-100" style={divStyle}>
            <h4>Me siga nas redes sociais!</h4>
        </div>
    );
}