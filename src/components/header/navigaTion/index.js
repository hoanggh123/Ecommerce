import { Button } from '@mui/material'
import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { IoIosMenu } from 'react-icons/io'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
const Navigation = () => {
    const [isOpenSidebarNav, setIsOpenSidebarNav] = useState(false);
    return (
        <nav>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-3 navPart1'>

                        <Button className='allCatTab align-item-center' onClick={() => setIsOpenSidebarNav(!isOpenSidebarNav)}>
                            <span className='icon1 mr-2'><IoIosMenu /></span>
                            <span className="text">ALL CATEGORIES</span>
                            <span className='icon2  ml-2'><FaAngleDown /></span>
                        </Button>
                        <div className={`sidebarNav ${isOpenSidebarNav === true ? 'open' : ''}`}>
                            <ul>
                                <li>
                                    <a href='/'>
                                        <Button>
                                            <img src='https://img.icons8.com/?size=100&id=UUCuPVtr11JH&format=png&color=000000' alt='icons'></img>
                                            <span>Fruits & Vegetables</span>
                                        </Button>
                                    </a>

                                </li>
                                <li>
                                    <a href='/'>
                                        <Button>
                                            <img src='https://img.icons8.com/?size=100&id=5273&format=png&color=000000' alt='icons'></img>
                                            <span>Meats & Seafood</span>
                                        </Button>
                                    </a>

                                </li>
                                <li>
                                    <a href='/'>
                                        <Button>
                                            <img src='https://img.icons8.com/?size=100&id=E75pJtNFtebG&format=png&color=000000' alt='icons'></img>
                                            <span>Breakfast & Dairy</span>
                                        </Button>
                                    </a>

                                </li>
                                <li>
                                    <a href='/'>
                                        <Button>
                                            <img src='https://img.icons8.com/?size=100&id=AXOqGJgVxm4z&format=png&color=000000' alt='icons'></img>
                                            <span>Beverages</span>
                                        </Button>
                                    </a>

                                </li>
                                <li>
                                    <a href='/'>
                                        <Button>
                                            <img src='https://img.icons8.com/?size=100&id=UdgabpPaX1Xb&format=png&color=000000' alt='icons'></img>
                                            <span> Breads & Bakery</span>
                                        </Button>
                                    </a>

                                </li>
                                <li>
                                    <a href='/'>
                                        <Button>
                                            <img src='https://img.icons8.com/?size=100&id=7518&format=png&color=000000' alt='icons'></img>
                                            <span>Frozen Foods</span>
                                        </Button>
                                    </a>

                                </li>
                                <li>
                                    <a href='/'>
                                        <Button>
                                            <img src='https://img.icons8.com/?size=100&id=P3ChRABnU07r&format=png&color=000000' alt='icons'></img>
                                            <span>Biscuits & Snacks</span>
                                        </Button>
                                    </a>
                                </li>
                                <li>
                                    <a href='/'>
                                        <Button>
                                            <img src='https://img.icons8.com/?size=100&id=3379&format=png&color=000000' alt='icons'></img>
                                            <span>Grocery & Staples</span>
                                        </Button>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className='col-sm-9 navPart2 d-flex align-items-center'>
                        <ul className='list list-inline ml-auto'>
                            <li className='list-inline-item'>
                                <a href='/'>
                                    <img src='https://img.icons8.com/?size=100&id=73&format=png&color=000000' alt='icons' />
                                    <Link to="/" >
                                        Home
                                    </Link>
                                </a>
                                <div className='submenu false'>
                                    <a href='/'>
                                        <Link to='/'>
                                            Men
                                        </Link>
                                    </a>
                                    <a href='/'>
                                        <Link to="/">
                                            Women
                                        </Link>
                                    </a>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <a href='/'>
                                    <img src='https://img.icons8.com/?size=100&id=47836&format=png&color=000000' alt='icons' />
                                    <Link to="/">
                                        Shop
                                    </Link>
                                </a>
                                <div className='submenu false'>
                                    <a href='/'>
                                        <Link to="/">
                                            Mobiles
                                        </Link>
                                    </a>
                                    <a href='/'>
                                        <Link to="/">
                                            Laptops
                                        </Link>
                                    </a>
                                    <a href='/'>
                                        <Link to="/">
                                            Smart Watch
                                        </Link>
                                    </a>
                                    <a href='/'>
                                        <Link to="/">
                                            Cameras
                                        </Link>
                                    </a>
                                </div>

                            </li>
                            <li className='list-inline-item'>
                                <a href='/'>
                                    <img src='https://img.icons8.com/?size=100&id=5273&format=png&color=000000' alt='icons' />
                                    <Link to="/">
                                        Meats & Seafood
                                    </Link>
                                </a>
                                <div className='submenu false'>
                                    <a href='/'>
                                        <Link to="/">
                                            Nam
                                        </Link>
                                    </a>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <a href='/'>
                                    <img src='https://img.icons8.com/?size=100&id=UdgabpPaX1Xb&format=png&color=000000' alt='icons' />
                                    <Link to="/">
                                        Bakery
                                    </Link>
                                </a>
                                <div className='submenu false'>
                                    <a href='/'>
                                        <Link to="/">
                                            Nam
                                        </Link>
                                    </a>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <a href='/'>
                                    <img src='https://img.icons8.com/?size=100&id=AXOqGJgVxm4z&format=png&color=000000' alt='icons' />
                                    <Link to="/">
                                        Beverages
                                    </Link>
                                </a>
                                <div className='submenu false'>
                                    <a href='/'>
                                        <Link to="/">
                                            Nam
                                        </Link>
                                    </a>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <a href='/'>
                                    <Link to="/">
                                        Blog
                                    </Link>
                                </a>
                                <div className='submenu false'>
                                    <a href='/'>
                                        <Link to="/">
                                            Nam
                                        </Link>
                                    </a>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <a href='/'>
                                    <Link to="/">

                                        Contact
                                    </Link>
                                </a>
                                <div className='submenu false'>
                                    <a href='/'>
                                        <Link to="/">
                                            Nam
                                        </Link>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation