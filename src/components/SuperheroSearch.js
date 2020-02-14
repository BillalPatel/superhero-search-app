import React, { useState } from 'react';
import axios from 'axios';

import CardList from '../components/CardList';
import ErrorMessage from '../components/ErrorMessage';

const SuperheroSearch = () => {
  const [resultsData, setResultsData] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [searchError, setSearchError] = useState(false);
  
  const handleChange = (event) => {
	setSearchField(event.target.value);
  };

  const handleSearch = async (event) => {
	event.preventDefault();

	const superheroName = searchField;
	setSearchError(false);

	await axios.get(`https://superheroapi.com/api/10212892996840054/search/${superheroName}`)
	  .then(res => {		
		const results = res.data.results;
		if (results === undefined) {
		  setSearchError(true);
		} else {
		  setResultsData(results);
		}
	  });
	}
//   };

  const filteredResults = resultsData.filter(hero => {
	return hero.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
	<>
  	  <div className='bg-light-green mw7 center pa3 br2-ns ba b--black-10'>
	    <div className='cf'>
		  <form onSubmit={handleSearch}>
		    <input 
		      type='search' 
		      placeholder='e.g. Batman or Spider-Man' 
			  onChange={handleChange}
		      className='f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns'
		    />
		    <button
		      type="submit"
		      className='f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns'>
			    Search
		    </button>
		  </form>
	    </div>
	  </div>
	  { !searchError ?
	    <CardList data={filteredResults}/>
	    : <ErrorMessage />
	  }
	</>
  )
};

export default SuperheroSearch;
