import React, { Component } from "react";
import { Card } from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './Data/projects.json';

const divStyle = {
    color: 'black',
    paddingTop: '5vmin',
    paddingBottom: '2.5vmin',
};

const cardsStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: '3vmin 0',
    width: '90%',
};

export class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: data.projects,
            cards: [],
        };
        for (let i = 0; i < this.state.projects.length; i++) {
            this.state.cards.push(
                    <Card key={i}
                        img={this.state.projects[i].image}
                        title={this.state.projects[i].name}
                        tags={this.state.projects[i].tags}
                        type={this.state.projects[i].type} />)
        }
    }

    render() {
        return (
            <div className="home w-100" style={divStyle}>
                <h1 style={{ fontWeight: 'bolder', color: '#1C3144' }}>PROJETOS</h1>
                <div style={cardsStyle}>
                    {this.state.cards}
                </div>
            </div>
        )
    }
}