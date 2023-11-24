import React from 'react'
import { FaRegUser } from 'react-icons/fa'
import { RiShutDownLine } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
function RootNavClientName() {
    return (
        <>
            <div id="RootClientName">
                <div className="clientname">
                    <div className="row d-flex justify-content-center">
                        <div className="col-11 text-center">
                            <h5 className='mt-2'>Client Name</h5>
                        </div>
                        <div className="col-1 dropstart">
                            <div className="dropdown rootNavUser mt-2">
                                <span className='fs-4 className="dropdown-toggle" data-bs-toggle="dropdown"' ><FaRegUser /></span>
                                <ul className='dropdown-menu' style={{ position: 'absolute', right: '0', textAlign: "center" }}>
                                    <li className='dropdown-item'>
                                        <NavLink to="profile" className='fs-5 submenu_icons'><FaRegUser /><span className='icons_font_size fs-6'>Profile</span></NavLink>
                                    </li>
                                    <li className='dropdown-item'>
                                        <NavLink to="logout" className='fs-5 submenu_icons'><RiShutDownLine /><span className='icons_font_size fs-6'>Logout</span></NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RootNavClientName