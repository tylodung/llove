import React from 'react'

import './style.scss'

class Youtube extends React.Component {
    render() {

        return (
            <div className='youtube'>
                <iframe width="320" height="300" src="https://www.youtube.com/embed/N4WTi9EHLqA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        );
    }
}

export default Youtube
