import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Styles/Footer.css';

export function Footer() {
    return (
        <div className="home divFooter">
            <h5 className="text" style={{marginBottom: '0'}}><a href="https://github.com/LuSrodri/lusrodri.me">Clique aqui para acessar o repositório.</a></h5>
            <hr className="horizontalLRow"></hr>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h5 className="text" >Siga-me nas redes sociais!</h5>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', }}>
                    <a className="icon" href="https://www.linkedin.com/in/lucas-santos-rodrigues/"><i className="bi bi-linkedin"></i></a>
                    <a className="icon" href="https://github.com/lusrodri"><i className="bi bi-github"></i></a>
                </div>
            </div>
        </div>
    );
}