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
			data: [],
			searchField: ''
		};
	}

	// https://superheroapi.com/api/110622440374412/search/batman

	componentDidMount() {
		axios.get('http://localhost:3000/results')
		.then(res => {
			const data = res.data;
			this.setState({data})
		})
	}

	onSearch = (event) => {
		this.setState({searchField: event.target.value});
	}

	render() {
		const {data, searchField} = this.state;
		const filteredResults = data.filter(hero => {
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
