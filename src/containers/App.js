import React, { Component, Fragment } from 'react';
import './App.css';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList';
// import {data} from './data';

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
			.then(users => this.setState({data: users})
		);
	}

	render() {
		return (
			<Fragment>
				<Header />
				<SearchBox />
				<CardList data={this.state.data}/>
			</Fragment>
		);
	}
}

export default App;
