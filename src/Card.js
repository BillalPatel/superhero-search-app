import React from 'react';

const Card = (props) => {
	return (
		// <div className='tc grow bg-light-green br3 pa5 ma2 dib bw2 shadow-5'>
		<div className='center mw5 mw6-ns br3 hidden ba b--black-10 mv4'>
			<div className="pa3 bt b--black-10">
				<h1 className='f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3'>{props.title}</h1>
				<p className='f6 f5-ns lh-copy measure'>{props.content}</p>
			</div>
		</div>
	)
}

export default Card;