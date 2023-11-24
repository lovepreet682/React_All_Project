import React, { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom';

import { AiOutlineHome } from 'react-icons/ai';
import { GiNetworkBars } from 'react-icons/gi';
import { FiSettings, FiUsers, FiNavigation, FiUserPlus } from 'react-icons/fi';
import { FaUsers } from 'react-icons/fa';
import { BiUserCircle } from 'react-icons/bi';
import { MdOutlineComputer, MdOutlineRealEstateAgent, MdOutlineDataset } from 'react-icons/md'
import { GrConfigure, GrHome } from 'react-icons/gr';
import { FaUsersRays, FaRegUser } from 'react-icons/fa6'
import { TbWorldBolt } from 'react-icons/tb';
import { IoMdTime } from 'react-icons/io';
import { IoCodeWorking,IoAppsOutline} from 'react-icons/io5'
import { RiShutDownLine } from 'react-icons/ri'
import RootNavClientName from './RootNavClientName';


function SlideBar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    // Toggle function to open/close the navigation menu
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    return (
        <>
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className={`col-auto min-vh-100 ${isNavOpen ? 'show' : ''}`} id="iconsColor">
                            {/* Add a button for mobile navigation */}
                            <button
                                className="navbar-toggler fade-in" style={{fontSize:'28px'}}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded={isNavOpen ? 'true' : 'false'}
                                aria-label="Toggle navigation"
                                onClick={toggleNav}
                                id='animation'
                            >
                                <span className="navbar-toggler-icon"><IoAppsOutline/></span>
                            </button>
                            <div className='collapse navbar-collapse' id='navbarNav'>
                                <ul className=' list-unstyled' id='iconsbar'>
                                    <div className="logo">
                                        <h6 className=''> </h6>
                                    </div>
                                    <li className='nav-link'><NavLink to="home" className='fs-2'>  <AiOutlineHome /> <span className='icons_font_size fs-6' >Home</span></NavLink></li>
                                    <li className='nav-link'><NavLink to="roster" className='fs-2'><GiNetworkBars /><span className='icons_font_size fs-6'>Roster</span></NavLink></li>

                                    {/* CMS DropDown */}
                                    <div className="dropdown">
                                        <Link to='#' className="dropdown-toggle" data-bs-toggle="dropdown">
                                            <NavLink to="download" className='fs-2'><FiNavigation /><span className='icons_font_size fs-6'>CMS</span></NavLink>
                                        </Link>
                                        <ul className='dropdown-menu'>
                                            <li className='dropdown-item'> <NavLink to="system_cms" className='fs-4 submenu_icons'><MdOutlineComputer /><span className='icons_font_size fs-6'>System</span></NavLink> </li>
                                            <li className='dropdown-item'><NavLink to="vendor_cms" className='fs-4 submenu_icons'><MdOutlineDataset /><span className='icons_font_size fs-6'>Vendor</span></NavLink></li>
                                            <li className='dropdown-item'><NavLink to="namespace_cms" className='fs-4 submenu_icons'><FiUsers /><span className='icons_font_size fs-6'>Namespace</span></NavLink></li>
                                            <li className='dropdown-item'><NavLink to="systemconfig_cms" className='fs-4 submenu_icons'><GrConfigure /><span className='icons_font_size fs-6'>System Config</span></NavLink></li>
                                        </ul>
                                    </div>

                                    {/* user Settings */}
                                    <div className="dropdown">
                                        <Link to='settings' className="dropdown-toggle" data-bs-toggle="dropdown">
                                            <NavLink to="download" className='fs-2 '><FiSettings /><span className='icons_font_size fs-6'>Settings</span></NavLink>
                                        </Link>
                                        <ul className='dropdown-menu'>
                                            <li className='dropdown-item'>
                                                <NavLink to="timezone" className='fs-4 submenu_icons'><IoMdTime /><span className='icons_font_size fs-6'>Time Zone</span></NavLink>
                                            </li>
                                            <li className='dropdown-item'>
                                                <NavLink to="country" className='fs-4 submenu_icons'><TbWorldBolt /><span className='icons_font_size fs-6'>Country</span></NavLink>
                                            </li>
                                            <li className='dropdown-item'>
                                                <NavLink to="state" className='fs-4 submenu_icons'><MdOutlineRealEstateAgent /><span className='icons_font_size fs-6'>State</span></NavLink>
                                            </li>
                                            <li className='dropdown-item'>
                                                <NavLink to="holiday" className='fs-4 submenu_icons'><GrHome /><span className='icons_font_size fs-6'>Holiday</span></NavLink>
                                            </li>

                                        </ul>
                                    </div>

                                    {/* user Module */}
                                    <div className="dropdown">
                                        <Link to='#' className="dropdown-toggle" data-bs-toggle="dropdown">
                                            <NavLink to="download" className='fs-2'><FaUsers /><span className='icons_font_size fs-6'>User Module</span></NavLink>
                                        </Link>
                                        <ul className='dropdown-menu'>
                                            <li className='dropdown-item'>
                                                <NavLink to="createuser" className='fs-4 submenu_icons'><FiUserPlus /><span className='icons_font_size fs-6'>Create User</span></NavLink>
                                            </li>
                                            <li className='dropdown-item'>
                                                <NavLink to="createrole" className='fs-4 submenu_icons'><IoCodeWorking /><span className='icons_font_size fs-6'>Create Role</span></NavLink>
                                            </li>
                                            <li className='dropdown-item'>
                                                <NavLink to="createclient" className='fs-4 submenu_icons'><FaUsersRays /><span className='icons_font_size fs-6'>Create Client</span></NavLink>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* User Profile */}
                                    <div className="dropdown">
                                        <Link href='#' className="dropdown-toggle" data-bs-toggle="dropdown">
                                            <NavLink to="download" className='fs-2'><BiUserCircle /><span className='icons_font_size fs-6'>User Profile</span></NavLink>
                                        </Link>
                                        <ul className='dropdown-menu'>
                                            <li className='dropdown-item'>
                                                <NavLink to="profile" className='fs-5 submenu_icons'><FaRegUser /><span className='icons_font_size fs-6'>Profile</span></NavLink>

                                            </li>
                                            <li className='dropdown-item'>
                                                <NavLink to="logout" className='fs-5 submenu_icons'><RiShutDownLine /><span className='icons_font_size fs-6'>Logout</span></NavLink>

                                            </li>
                                        </ul>
                                    </div>
                                </ul>
                            </div>

                        </div>

                        <div className='col p-0 m-0'>
                            <RootNavClientName />
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SlideBar