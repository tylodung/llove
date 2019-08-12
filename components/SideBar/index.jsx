import React from 'react'
import Youtube from '../Youtube'

import './style.scss'

class SideBar extends React.Component {
    render() {


        return (
            <div className='sidebar'>
                <Youtube {...this.props} />
		<div className='sidebar__sponsor'>Sponsor</div>
                <div className='sidebar__title'>Blogs</div>
		<div className='sidebar__link'>
		<a href='/about'>Đoàn Bình & Siêu Thị Mỹ Phẩm</a>
		<a href='http://haboba.com'>Điều Cần Biết Khi Dùng Mỹ Phẩm</a>
		<a href='/payments'>Thanh toán</a>
		<a href='/help'>Hướng dẫn đặt mua</a>
		</div>
            </div>
        );
    }
}

export default SideBar
