import React, { Fragment } from 'react';
import './App.css';
import Header from './Header';
import SearchBox from './SearchBox'
import CardList from './CardList';
import { data } from './data';

const App = () => {
	return (
		<Fragment>
			<Header />
			<SearchBox />
			<CardList data= { data }/>
		</Fragment>
	);
}

export default App;
