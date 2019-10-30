import React from 'react';
import Card from './Card';

const CardList = ({ data }) => {
	// const cards = {data.map(title => data.title)};
	return (
		<Card title={data[0].title} content={data[0].content}/>
	)
}

export default CardList;