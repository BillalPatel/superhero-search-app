import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons'
import Card from './Card';
import CardList from './CardList';
import { data } from './data';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<div>
		<CardList /> 
	</div>,
	document.getElementById('root'));

serviceWorker.unregister();
