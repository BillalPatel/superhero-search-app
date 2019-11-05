import React, { Component, Fragment } from 'react';
import axios from 'axios';

import './App.css';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList';

class App extends Component {
	constructor() {
		super();
		this.state = {
			someData: [],
			searchField: ''
		};
	}

	componentDidMount() {
		axios.get('https://superheroapi.com/api/10212892996840054/search/batman')
		.then(res => {		
			const someData = res.data.results;
			this.setState({someData});
		})
	}

	onSearch = (event) => {
		this.setState({searchField: event.target.value});
	}

	render() {
		const {someData, searchField} = this.state;
		const filteredResults = someData.filter(hero => {
			return hero.name.toLowerCase().includes(searchField.toLowerCase());
		})

		return (
			<Fragment>
				<Header />
				<SearchBox searchChange={this.onSearch}/>
				<CardList data={filteredResults}/>
			</Fragment>
		);
	}
}

export default App;
