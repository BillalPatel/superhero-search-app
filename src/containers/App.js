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
			dataP: [],
			searchField: 'batman'
		};
	}

	componentDidMount() {
		const {searchField} = this.state;

		// axios.get(`https://superheroapi.com/api/10212892996840054/search/${searchField}`)
		// .then(res => {		
		// 	const someData = res.data.results;
		// 	this.setState({
		// 		dataP: someData
		// 	});
		// })
	}

	onSearch = (event) => {
		const {searchField} = this.state;
		this.setState({
			searchField: event.target.value
		});
		axios.get(`https://superheroapi.com/api/10212892996840054/search/${searchField}`)
			.then(res => {		
				const someData = res.data.results;
				this.setState({
					dataP: someData
				});
			})

	}

	render() {
		const {dataP, searchField} = this.state;
		const filteredResults = dataP.filter(hero => {
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
