import React from 'react';

const Card = ({title, image, content}) => {
	var styles = {
		width:'50%',
    	marginRight:'2%',
    	float: 'left'
	}

	var styles2 = {
		margin: '100px'
	}

	return (
		<div style={styles2}>
			<div style={styles} className='center grow shadow mw5 mw6-ns br3 hidden ba bw2 b--black-10 mv4'>
				<div className="pa3 bt b--black-10">
					<h1 className='f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3'>{title}</h1>
					<img className='db' alt='Superhero Image' src={image} />
					<p className='f6 f5-ns lh-copy measure'>{content}</p>
				</div>
			</div>
		</div>
	)
}

export default Card;