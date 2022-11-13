import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Typed from 'react-typed';
import './Styles/Home.css';

export class Home extends React.Component {
    technologies = ['WEB', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'React.js', 'ASP.NET'];

    render() {
        return (
            <div className="divHome">
                <h1 className="title">LUSRODRI</h1>
                <h4 className="text">Eu sou Lucas Santos Rodrigues, desenvolvedor <Typed
                    typedRef={(typed) => { this.typed = typed; }}
                    strings={this.technologies}
                    typeSpeed={75}
                    backSpeed={60}
                    cursorChar="_"
                    loop
                    style={{fontWeight: 'bolder'}}
                    /></h4>
                <h4 className="text">Seja bem-vindo ao meu portfolio.</h4>
            </div>
        );
    }
}
