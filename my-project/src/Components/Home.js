import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Styles/Home.css';

export class Home extends React.Component {
    render() {
        return (
            <div className="divHome">
                <h1 className="title">LUSRODRI</h1>
                <h4 className="text">Eu sou Lucas Santos Rodrigues, desenvolvedor WEB.</h4>
                <h4 className="text">Seja bem-vindo ao meu portfólio.</h4>
            </div>
        );
    }
}
