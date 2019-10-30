import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './Header';
import SearchBox from './SearchBox'
import CardList from './CardList';
import {data} from './data';

class App extends Component {
	constructor() {
		super();
		this.state = {
			data: data,
			searchField: ''
		};
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
