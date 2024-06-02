import React from 'react'
import { RiArrowDownLine, RiCheckboxBlankCircleFill, RiNotification3Fill, RiSearchLine } from 'react-icons/ri'

const Navbar = () => {
    return (
        /* Header */
        <header data-aos="zoom-in" className='flex flex-col md:px-8 md:flex-row gap-4 items-center justify-between bg-white p-4 lg:px-10 w-full'>
            {/* Search */}
            <form className='w-full md:w-[30%] lg:w-[40%] order-1 md:order-none'>
                <div className='relative'>
                    <RiSearchLine className='absolute left-2 top-3'/>
                    <input type="text" className='w-full bg-gray-100 py-2 pl-8 pr-4 outline-none rounded-lg' placeholder='Search...' />
                </div>
            </form>
            {/* Notifications */}
            <nav className='w-full md:w-[70%] lg:w-[60%] flex justify-center md:justify-end'>
                <ul className='flex items-center gap-4'>
                    <li>
                        <a href="#" className='relative'>
                            <RiNotification3Fill className='text-xl'/>
                            <RiCheckboxBlankCircleFill className='absolute -right-1 -top-1 text-xs text-red-500' />
                        </a>
                    </li>
                    <li>
                        <a href="#" className='flex items-center gap-1'>
                            Sebastian Guerra<RiArrowDownLine/>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
