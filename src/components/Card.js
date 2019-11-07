import React from 'react';

const Card = ({title, image, fullName, placeOfBirth, firstAppearance}) => {
	return (
		<div className='relative card card-stacked-shadow card-course'>
        <div className='flex flex-column items-center overflow-hidden br2 pa4 bg-white navy pointer relative z-1 card-course-inner'>
          <div className='fa fa-play w3 h3 f3 absolute z-1 gray bg-white-70 o-0 items-center justify-center br-pill pointer card-play-btn'></div>
          <div className='mw5 mt3 center ph3'>
          	<h1 className='tc f3 bg-near-white br3 br--top black-60 mv0 pv2 ph3'>{title}</h1>
            <img className='db tc' alt='Superhero' src={image}/>
            <h3 className='f3 tc mt4 mb2 avenir fw5'>{fullName}</h3>

          <div className='f6 dark-gray o-50 mb4 tc'>{placeOfBirth}</div>
          <div className='f6 f5-ns lh-copy measure'>First Appearance: {firstAppearance}</div>
          </div>

          <div className='flex justify-between self-stretch items-center'>
          </div>
        </div>
      </div>
	)
}

export default Card;