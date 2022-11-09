import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Footer.css';

const divStyle = {
    backgroundColor: '#1C3144',
    color: '#F3D8C7',
    paddingTop: '5vmin',
    paddingBottom: '2.5vmin',
    borderTop: '1vmin solid #EF626C',
};


export function Footer() {
    return (
        <div className="home w-100" style={divStyle}>
            <h4>Siga-me nas redes sociais!</h4>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <a href="https://www.linkedin.com/in/lucas-santos-rodrigues/"><i class="bi bi-linkedin icon"></i></a>
                <a href="https://github.com/lusrodri"><i class="bi bi-github icon"></i></a>
            </div>
        </div>
    );
}