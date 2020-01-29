import React, { useState } from 'react';
import axios from 'axios';

import Header from '../components/Header';
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList';
import Footer from '../components/Footer';
import './App.css';

const App = () => {
  const [resultsData, setResultsData] = useState([]);
  const [searchField, setSearchField] = useState('');

  const onSearch = async (event) => {
	const superheroName = event.target.value;
	setSearchField(superheroName);

	await axios.get(`https://superheroapi.com/api/10212892996840054/search/${superheroName}`)
	  .then(res => {		
		const results = res.data.results;
		setResultsData(results);
	  });
  };

  const filteredResults = resultsData.filter(hero => {
	return hero.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
	<>
	  <Header />
	  <SearchBox searchChange={onSearch}/>
	  <CardList data={filteredResults}/>
	  <Footer />
	</>
  )
};

export default App;
