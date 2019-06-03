import React from 'react'
import Youtube from '../Youtube'

import './style.scss'

class SideBar extends React.Component {
    render() {


        return (
            <div className='sidebar'>
                <Youtube {...this.props} />
		<div className='sidebar__sponsor'>Sponsor</div>
                <div className='sidebar__title'>Quan Trọng</div>
		<div className='sidebar__link'>
		<a href='/about'>Đoàn Bình & Mỹ Phẩm Á Châu</a>
		<a href='http://haboba.com'>Điều Cần Biết Khi Dùng Mỹ Phẩm</a>
		<a href='/payments'>Thanh toán</a>
		<a href='/help'>Hướng dẫn đặt mua Mỹ Phẩm Á Châu</a>
		<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- chacnha -->
<ins class="adsbygoogle"
     style="display:inline-block;width:336px;height:280px"
     data-ad-client="ca-pub-6020662213494913"
     data-ad-slot="2376001963"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
		</div>
            </div>
        );
    }
}

export default SideBar
