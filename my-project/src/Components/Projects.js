import React from "react";
import { Card } from './Card';
import { Filter } from './Filter';
import { getProjectsFromDatabase } from './Data/database';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/Projects.css';

export class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            filteredProjectsByType: [],
            filteredProjectsByTags: [],
            filteredProjects: [],
        };
        this.state.cards = [];
        this.handleFilterTypeChange = this.handleFilterTypeChange.bind(this);
        this.handleFilterTagsChange = this.handleFilterTagsChange.bind(this);
        this.handleSelectedFilterTagsChange = this.handleSelectedFilterTagsChange.bind(this);
    }

    async componentDidMount() {
        getProjectsFromDatabase().then(result => {
            this.setState({ projects: result });
            this.setState({ filteredProjects: result });
            this.setState({ cards: this.mountCards(result) });
        });
    }

    mountCards(projects) {
        let cards = [];
        for (let i = 0; i < projects.length; i++) {
            cards.push(
                <Card key={i}
                    id={'card' + i}
                    img={projects[i].image}
                    title={projects[i].name}
                    tags={projects[i].tags}
                    type={projects[i].type}
                    description={projects[i].description}
                    url={projects[i].url} />)
        }
        return cards;
    }

    async handleFilterTypeChange(option) {
        await this.setState({ filterType: option });
        await this.onFiltering();
    }

    async handleFilterTagsChange() {
        await this.setFilterTags();
    }

    async handleSelectedFilterTagsChange(options) {
        await this.setState({ selectedFilterTags: options });
        await this.onFiltering(this.state.selectedFilterTags);
        this.setFilterTags(this.state.selectedFilterTags);
    }

    async setFilterTags(selectedFilterTags = new Set()) {
        if (this.state.filterType === '') {
            this.setState({ filterTags: [] });
            return;
        }
        let filterTags = new Set();
        for (let i = 0; i < this.state.filteredProjects.length; i++) {
            for (let j = 0; j < this.state.filteredProjects[i].tags.length; j++) {
                filterTags.add(this.state.filteredProjects[i].tags[j]);
            }
        }
        for (let item of selectedFilterTags) {
            filterTags.delete(item);
        }
        await this.setState({ filterTags: Array.from(filterTags) });
    }

    async onFiltering(filter = new Set()) {
        if (this.state.filterType === '') {
            await this.setState({ filteredProjectsByType: this.state.projects });
            await this.setState({ filteredProjects: this.state.filteredProjectsByType });
            this.setState({ filterTags: [] });
            await this.setState({ cards: [] });
            await this.setState({ cards: this.mountCards(this.state.filteredProjects) });
            return;
        }
        await this.setState({ filteredProjectsByType: this.state.projects.filter(project => project.type === this.state.filterType) });
        await this.setState({ filteredProjects: this.state.filteredProjectsByType });
        await this.setState({ cards: [] });
        await this.setState({ cards: this.mountCards(this.state.filteredProjects) });

        if (filter.size === 0) {
            await this.setState({ filteredProjectsByTags: this.state.filteredProjectsByType });
            await this.setState({ filteredProjects: this.state.filteredProjectsByTags });
            await this.setState({ cards: [] });
            await this.setState({ cards: this.mountCards(this.state.filteredProjects) });
            return;
        }
        let resultByTagsFilter = [];
        for (let i = 0; i < this.state.filteredProjectsByType.length; i++) {
            let count = 0;
            for (let item of filter) {
                if (this.state.filteredProjectsByType[i].tags.includes(item)) {
                    count++;
                }
            }
            if (count === filter.size) {
                resultByTagsFilter.push(this.state.filteredProjectsByType[i]);
            }
        }

        await this.setState({ filteredProjectsByTags: resultByTagsFilter });
        await this.setState({ filteredProjects: this.state.filteredProjectsByTags });
        await this.setState({ cards: [] });
        await this.setState({ cards: this.mountCards(this.state.filteredProjects) });
    }

    render() {
        const filterType = this.state.filterType;
        const filterTags = this.state.filterTags;
        const selectedFilterTags = this.state.selectedFilterTags;
        return (
            <div className="home divProjects">
                <h1 style={{ fontWeight: 'bolder', color: '#1C3144' }}>PROJETOS</h1>
                <Filter
                    filterTags={filterTags}
                    onFilterTagsChange={this.handleFilterTagsChange}
                    filterType={filterType}
                    onFilterTypeChange={this.handleFilterTypeChange}
                    selectedFilterTags={selectedFilterTags}
                    onSelectedFilterTagsChange={this.handleSelectedFilterTagsChange} />
                <div className="divCards">
                    {this.state.cards}
                    {this.state.filteredCards}
                </div>
            </div>
        )
    }
}