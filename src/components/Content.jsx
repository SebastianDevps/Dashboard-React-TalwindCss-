import React from 'react'
import Navbar from './Navbar'
import { RiArrowDownLine, RiArrowDownSLine, RiCloseLine, RiFilter3Line, RiMapPinRangeLine, RiSearchLine } from 'react-icons/ri'
import Cards from './Cards'


const Content = () => {
    return (
        <div className="col-span-5">
            {/* Header */}
            <Navbar />
            {/* Content */}
            <div className='p-4 md:p-8 lg:p-10 bg-gray-100 '>
                <div data-aos="zoom-in"className='mb-8'>
                    <h1 className='text-3xl font-semibold'>Job Board</h1>
                </div>
                {/* Search */}
                <div data-aos="zoom-in"className='grid grid-col-1 md:grid-cols-4 gap-4 items-center mb-6'>
                    <form className='col-span-2'>
                        <div className='relative'>
                            <RiSearchLine className='absolute left-2 top-3 text-purple-600' />
                            <input
                                type="text"
                                className='w-full bg-gray-200 py-2 pl-8 pr-4 outline-none '
                                placeholder='Search...' />
                        </div>
                    </form>
                    <form className='col-span-1'>
                        <div className='relative'>
                            <RiMapPinRangeLine className='absolute left-2 top-3 text-purple-600' />
                            <select
                                type="text"
                                className='w-full bg-gray-200 py-2 pl-8 pr-4 outline-none '
                                placeholder='Buscar...'
                            >
                                <option>Anywhere</option>
                            </select>
                        </div>
                    </form>
                    <form className='col-span-1'>
                        <div className='relative'>
                            <RiFilter3Line className='absolute left-2 top-3 text-purple-600' />
                            <input
                                type="text"
                                className='w-full bg-gray-200 py-2 pl-8 pr-4 outline-none '
                                placeholder='Filters...'
                            />
                            <span className='absolute text-sm right-2 top-[7px] bg-purple-600 text-white py-1 px-[10px] rounded-full'>
                                4
                            </span>
                        </div>
                    </form>
                </div>
                {/* Burbujas */}
                <div data-aos="zoom-in" className='flex flex-wrap items-center gap-4 mb-20'>
                    <span className='bg-white flex items-center gap-4 py-2 pl-4 px-6 rounded-full'>
                        <button className='bg-purple-100 p-1 rounded-full text-purple-600 text-xs'>
                            <RiCloseLine/>
                        </button>{" "}
                        <span className='text-gray-500'>Design</span>
                    </span>
                    <span className='bg-white flex items-center gap-4 py-2 pl-4 px-6 rounded-full'>
                        <button className='bg-purple-100 p-1 rounded-full text-purple-600 text-xs'>
                            <RiCloseLine/>
                        </button>{" "}
                        <span className='text-gray-500'>Regular</span>
                    </span>
                    <span className='bg-white flex items-center gap-4 py-2 pl-4 px-6 rounded-full'>
                        <button className='bg-purple-100 p-1 rounded-full text-purple-600 text-xs'>
                            <RiCloseLine/>
                        </button>{" "}
                        <span className='text-gray-500'>Full time</span>
                    </span>
                    <span className='bg-white flex items-center gap-4 py-2 pl-4 px-6 rounded-full'>
                        <button className='bg-purple-100 p-1 rounded-full text-purple-600 text-xs'>
                            <RiCloseLine/>
                        </button>{" "}
                        <span className='text-gray-500'>B2B</span>
                    </span>
                    <button className='text-gray-500 ml-4'>Clear all</button> 
                </div>
                {/* Results */}
                <div data-aos="zoom-in" className='flex items-center justify-between mb-8'>
                    <p className='text-gray-500'>
                        We' ve found <span className='text-purple-600 font-bold'>523</span> jobs!
                    </p>
                    <p className='flex items-center gap-2 '>
                        Sort by: <span className='text-purple-600 font-bold hover:cursor-pointer'>Date</span>{" "} <RiArrowDownSLine/>
                    </p>
                </div>
                {/* Cards */}
                <div data-aos="fade-up" className='h-64 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
                <Cards/>
                </div>
            </div>
        </div>
    )
}

export default Content
