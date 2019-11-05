import React from 'react';

const SearchBox = ({searchChange}) => {
	return (
  		<div className='bg-light-green mw7 center pa3 br2-ns ba b--black-10'>
		    <div className='cf'>
				<input type='search' placeholder='Type search' onBlur={searchChange} className='f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns'/>
				<input type='submit'className='f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns'/>
			</div>	
		</div>
	)
}

export default SearchBox;