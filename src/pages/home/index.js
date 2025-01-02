import HomeBanner from '../../components/homeBanner'
import { Button } from '@mui/material'
import { IoIosArrowForward } from 'react-icons/io'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules';
import ProductItem from '../../components/productItem/ProductItem';
import banner1 from '../../assets/img/banner1.jpg'
import banner2 from '../../assets/img/banner2.jpg'
import banner3 from '../../assets/img/banner3.jpg'
import banner4 from '../../assets/img/banner4.jpg'
import coupon from '../../assets/img/coupon.png'
import HomeCat from '../../components/HomeCat'
import { IoMailOpenOutline } from 'react-icons/io5'
const Home = () => {
    return (
        <div>
            <HomeBanner />
            <HomeCat />
            <section className='homeProducts'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='sticky'>
                                <div className='banner'>
                                    <img src={banner1} alt='bannerSeler' className='cursor w-100'></img>
                                </div>
                                <div className='banner mt-3'>
                                    <img src={banner2} alt='bannerSeler' className='cursor w-100'></img>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-9 productRow'>
                            <div className='d-flex align-items-center'>
                                <div className='info w-75'>
                                    <h3 className='mb-0 hd'>Best Sellers</h3>
                                    <p className='text-ligh text-sml mb-0'>Do not miss the current offers until the end of March.</p>
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

                            <div className='d-flex align-items-center mt-5'>
                                <div className='info w-75'>
                                    <h3 className='mb-0 hd'>NEW PRODUCTS</h3>
                                    <p className='text-ligh text-sml mb-0'>New products with updated stocks.</p>
                                </div>
                                <Button className='viewAllBtn ml-auto'>View all <IoIosArrowForward /></Button>
                            </div>
                            <div className='product_row productRow2 w-100 mt-4 d-flex'>
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                            </div>
                            <div className='d-flex mt-4 mb-5 bannerSection'>
                                <div className='banner'>
                                    <img src={banner3} className='cursor w-100' alt=''></img>
                                </div>
                                <div className='banner'>
                                    <img src={banner4} className='cursor w-100' alt=''></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='newsLetterSection mt-3 mb-3 d-flex align-items-center'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <p className='text-white mb-1'>$20 discount for your first order</p>
                            <h3 className='text-white'>Join our newsletter and get...</h3>
                            <p className='text-ligh'>Join our email subscription now to get updates on <br /> promotions and coupons.</p>
                            <form>
                                <IoMailOpenOutline />
                                <input type='text' placeholder='Your Email Address' />
                                <Button>Subscribe</Button>
                            </form>
                        </div>
                        <div className='col-md-6'>
                            <img src={coupon} alt=''></img>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
