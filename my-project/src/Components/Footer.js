import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Styles/Footer.css';

export function Footer() {
    return (
        <div className="home divFooter">
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', width: '100%' }}>
                    <a className="icon" href="https://www.linkedin.com/in/lucas-santos-rodrigues/"><i className="bi bi-linkedin"></i></a>
                    <a className="icon" href="https://github.com/lusrodri"><i className="bi bi-github"></i></a>
            </div>
        </div>
    );
}