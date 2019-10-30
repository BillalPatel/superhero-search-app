import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons'
import Card from './Card';
import { data } from './data';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<div>
		<Card title={data[0].title} content={data[0].content}/> 
		<Card title={data[1].title} content={data[1].content}/> 
		<Card title={data[2].title} content={data[2].content}/> 
		<Card title={data[3].title} content={data[3].content}/> 
		<Card title={data[4].title} content={data[4].content}/> 
		<Card title={data[5].title} content={data[5].content}/> 
		<Card title={data[6].title} content={data[6].content}/> 
		<Card title={data[7].title} content={data[7].content}/> 
		<Card title={data[8].title} content={data[8].content}/> 
		<Card title={data[9].title} content={data[9].content}/> 
		<Card title={data[10].title} content={data[10].content}/> 
	</div>,
	document.getElementById('root'));

serviceWorker.unregister();
