import React, { Component } from "react";
import { Card } from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './Data/projects.json';
import './Styles/Projects.css';

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
                        id={'card' + i}
                        img={this.state.projects[i].image}
                        title={this.state.projects[i].name}
                        tags={this.state.projects[i].tags}
                        type={this.state.projects[i].type}
                        description={this.state.projects[i].description} 
                        url={this.state.projects[i].url}/>)
        }
    }

    render() {
        return (
            <div className="home divProjects">
                <h1 style={{ fontWeight: 'bolder', color: '#1C3144' }}>PROJETOS</h1>
                <div className="divCards">
                    {this.state.cards}
                </div>
            </div>
        )
    }
}