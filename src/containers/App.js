import React, { Component, Fragment } from 'react';
import axios from 'axios';

import './App.css';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList';
import Footer from '../components/Footer';

class App extends Component {
	constructor() {
		super();
		this.state = {
			resultsData: [],
			searchField: 'Batman'
		};
	}

	componentDidMount() {
		
	}

	onSearch = (event) => {
		const {searchField} = this.state;
		this.setState({
			searchField: event.target.value
		});

		axios.get(`https://superheroapi.com/api/10212892996840054/search/${searchField}`)
			.then(res => {		
				const results = res.data.results;
				this.setState({
					resultsData: results
				});
			})
	}

	render() {
		const {resultsData, searchField} = this.state;
		const filteredResults = resultsData.filter(hero => {
			return hero.name.toLowerCase().includes(searchField.toLowerCase());
		})

		return (
			<Fragment>
				<Header />
				<SearchBox searchChange={this.onSearch}/>
				<CardList data={filteredResults}/>
				<Footer />
			</Fragment>
		);
	}
}

export default App;
