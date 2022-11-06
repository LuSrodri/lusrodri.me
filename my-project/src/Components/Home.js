import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const divStyle = {
    backgroundColor: '#1C3144',
    color: '#F3D8C7',
    paddingTop: '5vmin',
    paddingBottom: '2.5vmin',
};

const titleStyle = {
    marginTop: '2.5vh',
    marginBottom: '5vh',
    fontSize: '8vmin',
};

export function Home() {
    return (
        <div className="home w-100" style={divStyle}>
            <h1 style={titleStyle}>LuSrodri.me</h1>
            <h4>Eu sou Lucas Santos Rodrigues, desenvolvedor WEB e esse é o meu portfolio!😊</h4>
            <h2></h2>
        </div>
    );
}