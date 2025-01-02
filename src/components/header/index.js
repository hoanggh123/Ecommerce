import React, { useContext } from 'react'
import CountryDropDown from '../countryDropDown'
import { Button } from '@mui/material'
import { IoBagOutline } from 'react-icons/io5'
import SearchBox from './searchBox'
import Navigation from './navigaTion'
import { MyContext } from '../../App'
import { Link } from 'react-router-dom'

const Header = () => {
  const context = useContext(MyContext);
  
  return (
    <div className='headerWrapperFixed'>
      <div className='headerWrapper'>
        <div className='top-strip bg-purple'>
          <div className='container'>
            <p className='mb-0 mt-0 text-center'>
              Do lượng truy cập tăng cao, các đơn hàng có thể bị xử lý chậm một chút.
            </p>
          </div>
        </div>
        <header className='header'>
          <div className='container'>
            <div className='row'>
              <div className='logoWrapper d-flex align-items-center col-sm-2'>
                <Link to="/" className='logo'>
                  <img 
                    src='https://dynamic.brandcrowd.com/asset/logo/70ef52ef-33e4-4a38-a6e0-58ec949c76d8/logo-search-grid-1x?logoTemplateVersion=1&v=637007828225030000&text=Shop_DHH&colorpalette=green' 
                    alt='logo' 
                  />
                </Link>
              </div>
              <div className="col-sm-10 d-flex align-items-center part2">
                {
                  context.countryList.length !== 0 && <CountryDropDown />
                }
                <div className='headerSearchWrapper'>
                  <div className='d-flex align-items-center ml-3 mr-3'>
                    <SearchBox />
                  </div>
                </div>
                <div className='part3 d-flex align-items-center ml-auto'>
                  <Link to='/login'>
                    <Button className='btn-blue btn-round mr-3 css-1ujsas3'>
                      Đăng nhập
                      <span className='MuiTouchRipple-root css-w0pj6f'></span>
                    </Button>
                  </Link>
                  <div className='ml-auto cartTab d-flex align-items-center'>
                    <span className='price'>30$</span>
                    <div className='position-relative ml-2 res-hide'>
                      <Button className='circle ml-2'>
                        <IoBagOutline />
                      </Button>
                      <span className="count d-flex align-items-center justify-content-center">
                        <font>0</font>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Navigation />
      </div>
    </div>
  )
}

export default Header
