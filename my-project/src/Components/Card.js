import React from "react";
import './Styles/Card.css';
import { Dialog } from './Dialog';

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
        if (this.props.type === 'site')
            this.setState({ type: 'WebSite' });
        else if (this.props.type === 'repo')
            this.setState({ type: 'Repositório' });
    }

    openDialog(e) {
        document.getElementById(this.props.id + 'Dialog').showModal();
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    }

    render() {
        if (this.props.img === '')
            return (
                <>
                    <div id={this.props.id} className="divCard" onClick={(e) => this.openDialog(e)}>
                        <div>
                            <h2>{this.props.title}</h2>
                            <p>{this.state.tagsElement}</p>
                        </div>
                        <h4>Clique e veja mais sobre esse {this.state.type}!</h4>
                    </div>
                    <Dialog
                        id={this.props.id + 'Dialog'}
                        img={this.props.img}
                        title={this.props.title}
                        tags={this.props.tags}
                        type={this.state.type}
                        description={this.props.description}
                        url={this.props.url}>
                    </Dialog>
                </>
            );
        else
            return (
                <>
                    <div id={this.props.id} className="divCard" onClick={(e) => this.openDialog(e)}>
                        <img src={this.props.img} alt=""/>
                        <div>
                            <h2>{this.props.title}</h2>
                            <p>{this.state.tagsElement}</p>
                        </div>
                    </div>
                    <Dialog
                        id={this.props.id + 'Dialog'}
                        img={this.props.img}
                        title={this.props.title}
                        tags={this.props.tags}
                        type={this.state.type}
                        description={this.props.description}
                        url={this.props.url}>
                    </Dialog>
                </>
            );
    }
}