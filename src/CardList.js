import React from 'react';
import Card from './Card';

const CardList = ({ data }) => {
	const cardComponent = data.map((el, i) =>
		<Card 
			key={ i } 
			title={ data[i].title } 
			content={ data[i].content }
		/>
	);
	return (
		<div>
			{ cardComponent }
		</div>
	)
}

export default CardList;