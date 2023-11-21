import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Styles/Home.css';

export class Home extends React.Component {
    render() {
        return (
            <header className="divHome">
                <h1>LuSRodri</h1>
                <h2>Buscando por um software de qualidade?</h2>
                <h2>Por um website incrível?</h2>
                <h2>Por um serviço confiável?</h2>
                <h2>Entre em contato comigo agora <a href="mailto:lucassrodri08@gmail.com?subject=Ol%C3%A1%20Lucas%0A&amp;body=Ol%C3%A1%20Lucas%2C%0A%0AGostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os...%0A">mesmo</a>!</h2>
            </header>   
        );
    }
}
