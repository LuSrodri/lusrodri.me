import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Styles/Footer.css';

export function Footer() {
    return (
        <div className="home divFooter">
            <h2>Bora conectar e trocar figurinhas? Me adicione no <a href="https://www.linkedin.com/in/lucas-santos-rodrigues/">LinkedIn</a>!</h2>
            <h2>Posto diversos conteúdos bacanas no Instagram, <a href="https://instagram.com/devdemais">me siga lá</a>!</h2>
            <h2>Quer ver outros projetos interessantes em que eu participei? Veja o meu <a href="https://github.com/lusrodri">GitHub</a>!</h2>
            <p>
                "A luta é por ser melhor do que ontem, e não ser melhor do que o outro."
            </p>
            <p>
                <strong>Lu</strong>cas <strong>S</strong>antos <strong>Rodri</strong>gues
            </p>
        </div>
    );
}