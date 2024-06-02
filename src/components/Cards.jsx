import React from 'react'
import { RiAmazonLine, RiDropboxFill, RiGoogleLine, RiTwitchLine } from 'react-icons/ri'

const Cards = () => {
    return (
        <div >
            {/* Card1 */}
            <a 
                href='#' className='bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-full drop-shadow-lg border-2
                        border-transparent hover:border-purple-400 transition-all mb-4'
            >
                {/* icon */}
                <div className='w-full md:w-[10%] flex justify-start md:justify-center items-center'>
                    <RiDropboxFill className='text-7xl bg-purple-100 text-purple-600 p-4 rounded-md' />
                </div>
                {/* title */}
                <div className='w-full md:w-[70%]'>
                    <h1 className='text-xl flex items-center gap-4 mb-2'>
                        Ux Designer
                        <span className='text-xs py-1 px-2 bg-purple-100 text-purple-600 font-bold'>Remote</span>
                        <span className='text-xs py-1 px-2 bg-green-100 text-green-600 font-bold'>Sketch</span>
                    </h1>
                    <p className='text-gray-500'>Dropbox ---- Warzawa</p>
                </div>
                {/* time */}
                <div className='w-full md:w-[20%] flex flex-col items-end'>
                    <h3 className='text-xl text-gray-500 mb-2'>8.8 - 13.7k PLN</h3>
                    <p className='text-gray-500'>2 days ago</p>
                </div>
            </a>
            {/* Card2 */}
            <a 
                href='#' className='bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-full drop-shadow-lg border-2
                        border-transparent hover:border-purple-400 transition-all mb-4'
            >
                {/* icon */}
                <div className='w-full md:w-[10%] flex justify-start md:justify-center items-center'>
                    <RiTwitchLine className='text-7xl bg-purple-100 text-purple-600 p-4 rounded-md' />
                </div>
                {/* title */}
                <div className='w-full md:w-[70%]'>
                    <h1 className='text-xl flex items-center gap-4 mb-2'>
                        Product Designer
                        <span className='text-xs py-1 px-2 bg-purple-100 text-purple-600 font-bold'>Remote</span>
                    </h1>
                    <p className='text-gray-500'>Twitch ---- Wroclaw</p>
                </div>
                {/* time */}
                <div className='w-full md:w-[20%] flex flex-col items-end'>
                    <h3 className='text-xl text-gray-500 mb-2'>8.8 - 13.5k PLN</h3>
                    <p className='text-gray-500'>2 days ago</p>
                </div>
            </a>
            {/* Card3 */}
            <a 
                href='#' className='bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-full drop-shadow-lg border-2
                        border-transparent hover:border-purple-400 transition-all mb-4'
            >
                {/* icon */}
                <div className='w-full md:w-[10%] flex justify-start md:justify-center items-center'>
                    <RiGoogleLine className='text-7xl bg-purple-100 text-purple-600 p-4 rounded-md' />
                </div>
                {/* title */}
                <div className='w-full md:w-[70%]'>
                    <h1 className='text-xl flex items-center gap-4 mb-2'>
                        UX/UI Designer
                        <span className='text-xs py-1 px-2 bg-purple-100 text-purple-600 font-bold'>Remote</span>
                        <span className='text-xs py-1 px-2 bg-yellow-100 text-yellow-600 font-bold'>Javascript</span>
                    </h1>
                    <p className='text-gray-500'>Google ---- Wroclaw</p>
                </div>
                {/* time */}
                <div className='w-full md:w-[20%] flex flex-col items-end'>
                    <h3 className='text-xl text-gray-500 mb-2'>8.8 - 13.5k PLN</h3>
                    <p className='text-gray-500'>2 days ago</p>
                </div>
            </a>
            {/* Card4 */}
            <a 
                href='#' className='bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-full drop-shadow-lg border-2
                        border-transparent hover:border-purple-400 transition-all mb-4'
            >
                {/* icon */}
                <div className='w-full md:w-[10%] flex justify-start md:justify-center items-center'>
                    <RiAmazonLine className='text-7xl bg-purple-100 text-purple-600 p-4 rounded-md' />
                </div>
                {/* title */}
                <div className='w-full md:w-[70%]'>
                    <h1 className='text-xl flex items-center gap-4 mb-2'>
                        Amazaon Designer
                        <span className='text-xs py-1 px-2 bg-purple-100 text-purple-600 font-bold'>Remote</span>
                        <span className='text-xs py-1 px-2 bg-red-100 text-red-600 font-bold'>Adobe</span>
                    </h1>
                    <p className='text-gray-500'>Amazon ---- Wroclaw</p>
                </div>
                {/* time */}
                <div className='w-full md:w-[20%] flex flex-col items-end'>
                    <h3 className='text-xl text-gray-500 mb-2'>8.8 - 14.5k PLN</h3>
                    <p className='text-gray-500'>2 days ago</p>
                </div>
            </a>
        </div>
    )
}

export default Cards
