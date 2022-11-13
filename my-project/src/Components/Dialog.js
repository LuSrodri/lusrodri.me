import React, { Component } from "react";
import './Styles/Dialog.css'

export class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tagsElement: [],
            type: '',
        };

        for (let i = 0; i < this.props.tags.length; i++) {
            if (i === this.props.tags.length - 1)
                this.state.tagsElement.push((<span key={i}>{this.props.tags[i]}<span style={{ color: '#1C3144' }}>.</span></span>));
            else
                this.state.tagsElement.push((<span key={i}>{this.props.tags[i]}<span style={{ color: '#1C3144' }}>, </span></span>));
        }

        if (this.props.type == 'WebSite')
            this.state.type = 'Website';
        else
            this.state.type = 'Repositório';
    }

    closeModal(e) {
        let id = this.props.id;
        document.getElementById(id).className = 'divDialog hide';
        document.getElementById(id).addEventListener('animationend', function closing() {
            document.getElementById(id).className = 'divDialog';
            document.getElementById(id).close();
            document.getElementById(id).removeEventListener('animationend', closing, false);
        }, false);
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
    }

    componentDidMount(e) {
        document.getElementById(this.props.id).addEventListener('click', e => {
            if (e.target.id == this.props.id) {
                this.closeModal(e);
            }
        });
        document.getElementById(this.props.id).addEventListener('close', e => {
            document.getElementsByTagName('body')[0].style.overflow = 'auto';
        });
    }

    render() {
        return (
            <dialog id={this.props.id} className="divDialog">
                <div id={this.props.id + 'Div'} className="divDialogModal">
                    <h2>{this.props.title}</h2>
                    <div className="info">
                        <p>{this.props.description}</p>
                        <p className="tags"><span style={{ color: '#1C3144' }}>Tecnologias usadas:</span> {this.state.tagsElement}</p>
                        <hr className="hrDialog"></hr>
                    </div>
                    <div className="buttons">
                        <button className="btn btn-danger" onClick={(e) => this.closeModal(e)}>Fechar <i className="bi bi-x-circle"></i></button>
                        <button className="btn btn-success" onClick={() => { window.open(this.props.url) }}>Abrir {this.state.type} <i className="bi bi-box-arrow-up-right"></i></button>
                    </div>
                </div>
            </dialog>
        );
    }
}