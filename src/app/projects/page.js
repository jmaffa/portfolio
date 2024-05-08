import React from 'react'
import NavBar from '../../components/navbar'
import Image from "next/image";


export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen font-merriweather">
        <NavBar/>
        <div className='lg:pl-16 text-center lg:text-left'>
            <h1 className='text-jm-blue text-6xl'>Projects <i className='hidden lg:inline lg:text-xl lg:align-middle lg:text-jm-black'>Check out some of my work!</i></h1>
            <h2 className='lg:hidden text-xl italic'>Check out some of my work!</h2>
        </div>
        <div className='flex flex-col px-20 py-10'>
          <a href='/projects/development' className='hover:bg-jm-yellow transition ease-in duration-300'>
            <div className='lg:flex lg:flex-row flex flex-col items-center px-4 py-4'>
              {/* This might be an image with a title */}
              <Image className='lg:pr-4' src='/development-cover.png' width='400' height='100' alt='Gendo Taiko Song Selector'></Image>
              <h1 className='lg:pr-8 font-bold text-2xl shrink-0 lg:w-48 text-center'>Gendo Taiko Song Selector</h1>
              <div className='lg:border-l-4 lg:rounded lg:h-40 lg:border-jm-blue'></div>
              <p className='lg:pl-8 text-xl grow'>This is a description of the project.</p>
            </div>
          </a>
          <a href='/projects/development' className='hover:bg-jm-yellow transition ease-in duration-300'>
            <div className='lg:flex lg:flex-row flex flex-col items-center px-4 py-4'>
              {/* This might be an image with a title */}
              <Image className='lg:pr-4' src='/development-cover.png' width='400' height='100' alt='Gendo Taiko Song Selector'></Image>
              <h1 className='lg:pr-8 font-bold text-2xl shrink-0 lg:w-48 text-center'>Iterative Design</h1>
              <div className='lg:border-l-4 lg:rounded lg:h-40 lg:border-jm-blue'></div>
              <p className='lg:pl-8 text-xl grow'>This is a description of the project.</p>
            </div>
          </a>
          <a href='/projects/development' className='hover:bg-jm-yellow transition ease-in duration-300'>
            <div className='lg:flex lg:flex-row flex flex-col items-center px-4 py-4'>
              {/* This might be an image with a title */}
              <Image className='lg:pr-4' src='/development-cover.png' width='400' height='100' alt='Gendo Taiko Song Selector'></Image>
              <h1 className='lg:pr-8 font-bold text-2xl shrink-0 lg:w-48 text-center'>Social Enterprise Management System</h1>
              <div className='lg:border-l-4 lg:rounded lg:h-40 lg:border-jm-blue'></div>
              <p className='lg:pl-8 text-xl grow'>This is a description of the project.</p>
            </div>
          </a>
          
          
        </div>
    </div>
  )
}
