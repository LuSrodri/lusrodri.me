import React, { Component } from "react";
import './Styles/Card.css';

export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tagsElement: '',
            type: '',
        };
        for (let i = 0; i < this.props.tags.length; i++) {
            if (i >= 6) {
                this.state.tagsElement = this.state.tagsElement += '...';
                break;
            }

            if (i === this.props.tags.length - 1)
                this.state.tagsElement = this.state.tagsElement += this.props.tags[i] + '.';
            else
                this.state.tagsElement = this.state.tagsElement += this.props.tags[i] + ', ';
        }
    }

    componentDidMount() {
        if (this.props.type == 'site')
            this.setState({ type: 'WebSite' });
        else if (this.props.type == 'repo')
            this.setState({ type: 'Repositório' });
    }

    render() {

        if (this.props.img == '')
            return (
                <div className="divCard">
                    <div>
                        <h2>{this.props.title}</h2>
                        <p>{this.state.tagsElement}</p>
                    </div>
                    <h4>Clique e veja mais sobre esse {this.state.type}!</h4>
                </div>
            );
        else
            return (
                <div className="divCard">
                    <img src={this.props.img} />
                    <div>
                        <h2>{this.props.title}</h2>
                        <p>{this.state.tagsElement}</p>
                    </div>
                </div>
            );

    }
}