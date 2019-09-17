import React from 'react'
import Youtube from '../Youtube'

import './style.scss'

class SideBar extends React.Component {
    render() {


        return (
            <div className='nosidebar'>
                <Youtube {...this.props} />
		<div className='sidebar__sponsor'></div>
                <div className='sidebar__title'></div>
		<div className='sidebar__link'>
		
		</div>
            </div>
        );
    }
}

export default SideBar
