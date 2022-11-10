import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Typed from 'react-typed';

const divStyle = {
    backgroundColor: '#1C3144',
    color: '#F3D8C7',
    paddingTop: '5vmin',
    paddingBottom: '2.5vmin',
    borderBottom: '1vmin solid #EF626C',
    width: '100%',
};

const titleStyle = {
    fontSize: '8vmin',
    color: '#EF626C',
    fontWeight: 'bolder',
};

export class Home extends React.Component {
    technologies = ['WEB', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'React.js', 'ASP.NET'];

    render() {
        return (
            <div className="home" style={divStyle}>
                <h1 style={titleStyle}>LUSRODRI</h1>
                <h4>Eu sou Lucas Santos Rodrigues, desenvolvedor <Typed
                    typedRef={(typed) => { this.typed = typed; }}
                    strings={this.technologies}
                    typeSpeed={75}
                    backSpeed={60}
                    cursorChar="_"
                    loop
                    style={{fontWeight: 'bolder'}}
                    /></h4>
                <h4>Seja bem-vindo ao meu portfolio.</h4>
            </div>
        );
    }
}
