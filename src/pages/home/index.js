import HomeBanner from '../../components/homeBanner'
import { Button } from '@mui/material'
import { IoIosArrowForward } from 'react-icons/io'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules';
import ProductItem from '../../components/productItem/ProductItem';
import banner1 from '../../img/banner1.jpg'
import banner2 from '../../img/banner2.jpg'
import HomeCat from '../../components/HomeCat'

const Home = () => {
    return (
        <div>
          <HomeBanner />
            <HomeCat/>
            <section className='homeProducts'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='banner'>
                                <img src={banner1} alt='bannerSeler' className='cursor w-100'></img>
                            </div>
                            <div className='banner mt-3'>
                                <img src={banner2} alt='bannerSeler' className='cursor w-100'></img>
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
            </section>
        </div>
    );
}

export default Home;
