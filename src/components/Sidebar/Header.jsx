import React from 'react'
import { HiOutlineSearch } from "react-icons/hi";

export default function Header() {
  return (
    <div className='bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200'>
        <div className='relative'>
            <HiOutlineSearch fontSize={20} className='absolute top-1/2 -translate-y-1/2 left-3 text-gray-400'/>
            <input 
                type="text" 
                placeholder='Search...' 
                className="text-sm focus:outline-none active:outline-none h-10  w-[24rem] border border-gray-300 round-sm px-4 pl-10 rounded-3xl"></input>
        </div>
        <div>
          <button className="inline-flex w-full justify-center rounded-full px-1 py-1 text-sm font-medium hover:bg-gray-200">
          <div
								className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
								style={{ backgroundImage: 'url("https://source.unsplash.com/80x80?face")' }}
							>
								<span className="sr-only">Marc Backes</span>
							</div>
          </button>
        </div>
    </div>
  )
}
