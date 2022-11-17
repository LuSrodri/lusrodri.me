import React from "react";
import './Styles/Filter.css';

export class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterTagsButton: [],
            selectedFilterTagsButton: [],
            filtersTags: new Set(),
            selectedFiltersTags: new Set(),
        };
        this.handleChange = this.handleChange.bind(this);
    }

    async handleChange(option) {
        await this.props.onFilterTypeChange(option);
        await this.props.onFilterTagsChange();
        await this.setFiltersTags();
    }

    async setFiltersTags() {
        let filterTagsButton = [];
        let selectedFilterTagsButton = [];
        if (this.props.filterTags.size === 0) {
            this.setState({ filterTagsButton: filterTagsButton });
        }
        if (this.state.selectedFiltersTags.size === 0) {
            this.setState({ selectedFilterTagsButton: selectedFilterTagsButton });
        }
        for (let i = 0; i < this.props.filterTags.length; i++) {
            filterTagsButton.push(<button key={i} id={"buttonTag"+this.props.filterTags[i].replace(/ /g,'')} onClick={() => this.onFilterTags(this.props.filterTags[i])} className="btn btn-info" ><h4 className="text">{this.props.filterTags[i]}</h4></button>);
        }
        for (let [key, value] of this.state.selectedFiltersTags.entries()) {
            selectedFilterTagsButton.push(<button key={key} id={"buttonTag"+value.replace(/ /g,'')} onClick={() => this.onFilterTags(value)} className="btn btn-info clicked" ><h4 className="text">{value}</h4></button>);
        }
        this.setState({ filterTagsButton: filterTagsButton });
        this.setState({ selectedFilterTagsButton: selectedFilterTagsButton });
    }

    onFilterType(option) {
        if (document.getElementById(option).classList.contains("clicked")) {
            document.getElementById(option).classList.remove("clicked");
            this.onClearFilters();
            return;
        }
        this.handleChange(option);
        let els = document.getElementsByClassName("btn btn-info");
        for (let i = 0; i < els.length; i++) {
            if (els[i].id !== option)
                els[i].style.display = "none";
            else
                els[i].classList.add("clicked");
        }
        document.getElementsByClassName("btn btn-info clear")[0].style.display = "unset";
    }

    async onFilterTags(id) {
        let selectedFiltersTags = this.state.selectedFiltersTags;
        if (selectedFiltersTags.has(id)){
            selectedFiltersTags.delete(id);
        }
        else{
            selectedFiltersTags.add(id);
        }

        await this.setState({ selectedFiltersTags: selectedFiltersTags });
        await this.props.onSelectedFilterTagsChange(this.state.selectedFiltersTags);
        this.setFiltersTags();
    }

    onClearFilters() {
        this.handleChange('');
        let els = document.getElementsByClassName("btn btn-info");
        for (let i = 0; i < els.length; i++) {
            els[i].style.display = "unset";
            els[i].classList.remove("clicked");
        }
        document.getElementsByClassName("btn btn-info clear")[0].style.display = "none";
        this.setState({ selectedFiltersTags: new Set() });
        this.setFiltersTags();
    }

    render() {
        return (
            <div className="divFilters">
                <button onClick={() => { this.onClearFilters() }} style={{ display: 'none' }} className="btn btn-info clear" id="clear"><h4 className="text"><i className="bi bi-x-circle"></i> Limpar</h4></button>
                <button onClick={() => { this.onFilterType('site') }} className="btn btn-info" id="site"><h4 className="text">Website</h4></button>
                <button onClick={() => { this.onFilterType('repo') }} className="btn btn-info" id="repo"><h4 className="text">Repositório</h4></button>
                {this.state.selectedFilterTagsButton}
                {this.state.filterTagsButton}
            </div>
        )
    }
}