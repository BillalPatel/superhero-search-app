import React from 'react';

const Card = ({title, content}) => {
	return (
		<div className='center mw5 mw6-ns br3 hidden ba b--black-10 mv4'>
			<div className="pa3 bt b--black-10">
				<h1 className='f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3'>{title}</h1>
				<p className='f6 f5-ns lh-copy measure'>{content}</p>
			</div>
		</div>
	)
}

export default Card;