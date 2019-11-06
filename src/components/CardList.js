import React from 'react';
import Card from './Card';

const CardList = ({data}) => {
	const cardComponent = data.map((el, i) =>
		<Card 
			key={i} 
			title={data[i].name}
			image={data[i].image.url}
			fullName={data[i].biography["full-name"]}
			placeOfBirth={data[i].biography["place-of-birth"]}
			content={data[i].connections.relatives}
		/>
	);
	
	return (
		<div>
			{cardComponent}
		</div>
	)
}

export default CardList;