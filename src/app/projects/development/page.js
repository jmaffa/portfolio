import React from 'react'
import Image from "next/image";
import Link from "next/link";
import NavBar from '@/components/navbar';

export default function page() {
  return (
    <div className="flex flex-col min-h-screen font-merriweather">
      <NavBar/>
      <div className='flex flex-col items-center'>
        <div className='w-3/5 max-h-screen align-middle'>
          <Image src="/placeholder.png" width={800} height={100} alt='Test'></Image>
        </div>
        <div className='flex flex-row w-full pt-6'>
          {/* Internal Nav */}
          <div className='hidden lg:inline pl-16 w-1/4 pt-2 sticky text-xl text-jm-blue '>
            <Link className='hover:text-jm-red' href='#section1'>1. Section 1<br/></Link> 
            <Link className='hover:text-jm-red' href='#section2'>2. Section 2</Link>
          </div>
          {/* Actual Case Study */}
          <div className='w-3/4 pt-2'>
            {/* Overview */}
            <h1 className='text-4xl pb-2'>Song Selector</h1>
            <hr className='w-1/2'></hr>
            <div className='grid grid-cols-2 gap-4 pt-4'>
              <div>
                <h3 className='font-bold text-jm-blue text-xl'>Client</h3>
                <p>Gendo Taiko</p>
              </div>
              <div>
                <h3 className='font-bold text-jm-blue text-xl'>Role</h3>
                <p>Developer, Designer</p>
              </div>
              <div>
                <h3 className='font-bold text-jm-blue text-xl'>Date</h3>
                <p>April 2024</p>
              </div>
              <div>
                <h3 className='font-bold text-jm-blue text-xl'>Tools</h3>
                <p>React, JS, Figma</p>
              </div>
            </div>
            {/* Case Study */}
            <div>
              <div id="section1">
                Test
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      
    </div>
  )
}
