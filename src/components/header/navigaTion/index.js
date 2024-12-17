import { Button } from '@mui/material'
import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { IoIosMenu } from 'react-icons/io'

const Navigation = () => {
    return (
        <nav>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-2 navPart1'>
                        <div className='catWrapper'>
                            <Button className='allCatTab '>
                                <span className='icon1 mr-2'><IoIosMenu /></span>
                                <span className="text">ALL CATEGORIES</span>
                                <span className='icon2  ml-2'><FaAngleDown /></span>
                            </Button>

                        </div>
                    </div>
                    <div className='col-sm-10 navPart2 d-flex align-items-center res-nav-wrapper close'>
                        <div className="res-nav">
                            <ul className='list list-inline ml-auto'>
                                <li className='list-inline-item'>
                                    <a href='/'>
                                        <Button>
                                            <img src='' alt='' width="20" className='mr-2' />
                                            <span>Fashion</span>
                                        </Button>
                                    </a>
                                    <div className='submenu false'>
                                        <a href='/'>
                                            <Button>
                                                Men
                                            </Button>
                                        </a>
                                        <a href='/'>
                                            <Button>
                                                Women
                                            </Button>
                                        </a>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <a href='/'>
                                        <Button>
                                            <img src='' alt='' width="20" className='mr-2' />
                                            <span>Electronics</span>
                                        </Button>
                                    </a>
                                    <div className='submenu false'>
                                        <a href='/'>
                                            <Button>
                                                Mobiles
                                            </Button>
                                        </a>
                                        <a href='/'>
                                            <Button>
                                                Laptops
                                            </Button>
                                        </a>
                                        <a href='/'>
                                            <Button>
                                                Smart Watch
                                            </Button>
                                        </a>
                                        <a href='/'>
                                            <Button>
                                                Cameras
                                            </Button>
                                        </a>
                                    </div>
                                    
                                </li>
                                <li className='list-inline-item'>
                                    <a href='/'>
                                        <Button>
                                            <img src='' alt='' width="20" className='mr-2' />
                                            <span>Bags</span>
                                        </Button>
                                    </a>
                                    <div className='submenu false'>
                                        <a href='/'>
                                            <Button>
                                                Nam
                                            </Button>
                                        </a>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <a href='/'>
                                        <Button>
                                            <img src='' alt='' width="20" className='mr-2' />
                                            <span>Footwear</span>
                                        </Button>
                                    </a>
                                    <div className='submenu false'>
                                        <a href='/'>
                                            <Button>
                                                Nam
                                            </Button>
                                        </a>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <a href='/'>
                                        <Button>
                                            <img src='' alt='' width="20" className='mr-2' />
                                            <span>Groceries</span>
                                        </Button>
                                    </a>
                                    <div className='submenu false'>
                                        <a href='/'>
                                            <Button>
                                                Nam
                                            </Button>
                                        </a>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <a href='/'>
                                        <Button>
                                            <img src='' alt='' width="20" className='mr-2' />
                                            <span>Beauty</span>
                                        </Button>
                                    </a>
                                    <div className='submenu false'>
                                        <a href='/'>
                                            <Button>
                                                Nam
                                            </Button>
                                        </a>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <a href='/'>
                                        <Button>
                                            <img src='' alt='' width="20" className='mr-2' />
                                            <span>Wellness</span>
                                        </Button>
                                    </a>
                                    <div className='submenu false'>
                                        <a href='/'>
                                            <Button>
                                                Nam
                                            </Button>
                                        </a>
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation