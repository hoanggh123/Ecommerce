import HomeBanner from '../../components/homeBanner'
import { Button } from '@mui/material'
import Rating from '@mui/material/Rating';
import { IoIosArrowForward } from 'react-icons/io'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules';
import ProductItem from '../../components/productItem/ProductItem';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <div className='homeProducts'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='banner'>
                                <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg' alt='bannerSeler' className='cursor w-100'></img>
                            </div>
                        </div>
                        <div className='col-md-9 productRow'>
                            <div className='d-flex align-items-center'>
                                <div className='info w-75'>
                                    <h3 className='mb-0 hd'>Best Sellers</h3>
                                    <p className='text-light text-sml mb-0'>Do not miss the current offers until the end of March.</p>
                                </div>
                                <Button className='viewAllBtn ml-auto'>View all <IoIosArrowForward /></Button>
                            </div>
                            <div className='product_row w-100 mt-4'>
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={0}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Navigation]}
                                    className='mySwiper'
                                >
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>


                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
