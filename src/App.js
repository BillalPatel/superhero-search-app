import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import CardList from './CardList';
import { data } from './data';

const App = () => {
	return (
		<Fragment>
			<Header />
			<CardList data= { data }/>
		</Fragment>
	);
}

export default App;
