import React, { Component, Fragment } from 'react';
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

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(posts => this.setState({data: posts})
		);
	}

	onSearch = (event) => {
		this.setState({searchField: event.target.value})
	}

	render() {
		const {data, searchField} = this.state;
		const filteredResults = data.filter(dat => {
			return dat.title.toLowerCase().includes(searchField.toLowerCase());
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
