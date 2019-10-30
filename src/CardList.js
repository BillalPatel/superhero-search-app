import React from 'react';
import Card from './Card';
import { data } from './data';


const CardList = () => {
	return <Card title={data[0].title} content={data[0].content}/>;
}

export default CardList;