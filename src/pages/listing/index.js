import React from 'react'
import Sidebar from '../../components/sidebar'
import banner6 from '../../assets/img/banner6.jpg'
const Listing = () => {
  return (
    <>
      <section className='product_Listing_Page pt-5'>
        <div className='container'>
          <div className='productListing d-flex'>
            <Sidebar />
            <div className='content_right'>
              <img src={banner6} alt='' className='w-100' style={{ borderRadius: '8px' }}></img>
            </div>
          </div>
        </div>
      </section>  
    </>
  )
}

export default Listing;