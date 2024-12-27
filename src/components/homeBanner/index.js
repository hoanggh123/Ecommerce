import React from 'react'
import Slider from 'react-slick'

const HomeBanner = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
    }
    return (
        <div>
            <div className='container' style={{ marginTop: '270px' }}>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='homeBannerSection col-md-9'>
                        <Slider {...settings}>
                            <div className='item'>
                                <img src='https://raw.githubusercontent.com/rinkuv37/fullstack-ecommerce/refs/heads/main/images/slideBanner1.jpg' alt='banner' className='w-100'></img>
                            </div>
                            <div className='item'>
                                <img src='https://raw.githubusercontent.com/rinkuv37/fullstack-ecommerce/refs/heads/main/images/slideBanner2.jpg' alt='banner' className='w-100'></img>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner;