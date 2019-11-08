import React from 'react';

const Card = ({title, image, fullName, placeOfBirth, universe, firstAppearance}) => {
	return (
		<div className='relative card card-stacked-shadow card-course'>
          <div className='mw5 mt3 center ph3'>
          <div className='pointer grow shadow mw5 mw6-ns br3 hidden ba bw2 b--black-10 mv'>
          	<h1 className='tc f2 bg-near-white br3 br--top black-60 mv0 pv2 ph3'>{title}</h1>
            <div>
              <img className='db tc' alt='Superhero' src={image}/>
              <h5 className='f3 tc mt3 mb3 avenir f4'>{fullName}</h5>
              <hr className="mw2 bb bw1 b--black-10"/>
          	  <div className='f6 dark-gray o-50 mb3 tc'>{placeOfBirth}</div>
          	  <div className='f6 dark-gray o-50 mb3 tc'>Publisher: {universe}</div>
          	<div>
          	  <div className='f6 dark-gray o-50 mb3 tc'>First Appearance: <br/>{firstAppearance}</div>
          	</div>
            </div>
          </div>
          </div>
        </div>
	)
}

export default Card;