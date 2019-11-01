import React from 'react';
import Card from './Card';

const CardList = ({data}) => {
	const cardComponent = data.map((el, i) =>
		<Card 
			key={i} 
			title={data[i].name}
			image={data[i].image.url}
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