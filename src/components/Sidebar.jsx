import React from 'react'
import {
    RiDashboardLine,
    RiBriefcaseLine,
    RiCalendar2Line,
    RiMessage2Line,
    RiLogoutBoxLine
} from 'react-icons/ri'

const Sidebar = ({ sidebar }) => {

    //console.log(sidebar)

    return (
        <div  className={`bg-white fixed lg:static w-[80%] lg:w-full md:w-[50%] top-0 z-50 transition-all duration-300 ${sidebar ? '-left-0' : '-left-full'} 
            w-full h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 col-span-1 p-8 border-r`}>
            {/* Logotipo */}
            <div data-aos="zoom-in" className='text-center p-4 '>
                <h1 className='uppercase font-bold tracking-[4px]'>Tu Logo</h1>
            </div>
            {/* Menu */}
            <div data-aos="zoom-in" className=' flex flex-col gap-2 justify-between h-[500px]'>
                <nav>
                    <ul>
                        <li>
                            <a href="#" className='flex items-center gap-3 p-4 rounded-lg text-gray-500 hover:bg-purple-600 hover:text-white 
                            transition-colors font-semibold'>
                                <RiDashboardLine />
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="#" className='flex items-center gap-3 p-4 rounded-lg text-gray-500 hover:bg-purple-600 hover:text-white 
                        transition-colors font-semibold'>
                                <RiBriefcaseLine />
                                Job Board
                            </a>
                        </li>
                        <li>
                            <a href="#" className='flex items-center gap-3 p-4 rounded-lg text-gray-500 hover:bg-purple-600 hover:text-white 
                        transition-colors font-semibold'>
                                <RiCalendar2Line />
                                Shedule
                            </a>
                        </li>
                        <li>
                            <a href="#" className='flex items-center gap-3 p-4 rounded-lg text-gray-500 hover:bg-purple-600 hover:text-white 
                        transition-colors font-semibold'>
                                <RiMessage2Line />
                                Messenger
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* Image and logOut */}
                <div className='flex flex-col gap-2'>
                    <img src="img1.svg" alt="Image" />
                    {/* Update */}
                    <div className='bg-purple-50 p-4 flex flex-col gap-2 rounded-3xl'>
                        <h3 className='text-xl text-center'>Get upgrade</h3>
                        <p className='text-gray-500 text-center'>Lorem ipsum dolor sit amet.
                            Delectus!
                        </p>
                        <button className='bg-purple-600 text-white p-2 rounded-lg'>Learn More</button>
                    </div>
                    <a href="#" className='flex items-center gap-3 p-4 rounded-lg text-gray-500 hover:bg-purple-600 hover:text-white 
                    transition-colors font-semibold'>
                        <RiLogoutBoxLine />
                        Logout
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
