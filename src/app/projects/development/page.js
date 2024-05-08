import React from 'react'
import Image from "next/image";
import Link from "next/link";
import NavBar from '@/components/navbar';

export default function page() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar/>
      <div className='flex flex-col items-center'>
        <div className='w-3/5 max-h-screen align-middle'>
          <Image src="/placeholder.png" width={800} height={100} alt='Test'></Image>
        </div>
        <div className='flex flex-row w-full pt-2'>
          {/* Internal Nav */}
          <div className='hidden lg:inline pl-16 w-1/4 pt-8 text-base text-jm-blue sticky top-6 h-1/4'>
            <Link className='hover:text-jm-red' href='#context'>1. Context</Link> <br/>
            <Link className='hover:text-jm-red' href='#comparative-analysis'>2. Comparative Analysis</Link> <br/>
            <Link className='hover:text-jm-red' href='#sketching-wireframing'>3. Sketching & Wireframes</Link> <br/>
            <Link className='hover:text-jm-red' href='#development'>4. Development</Link> <br/>
          </div>
          {/* Actual Case Study */}
          <div className='w-3/4 pt-2 pr-48'>
            {/* Overview */}
            <div className='py-4'>
              <h1 className='text-5xl pb-2'>Song Selector</h1>
              <p className='text-lg'>List aggregation system saving the headache of creating performance lineups.</p>
            </div>
            
            <div className='w-3/5 grid grid-cols-2 gap-4 py-4 border-solid border-y-2 border-jm-blue'>
              <div>
                <h3 className='font-bold text-jm-blue text-xl'>Client</h3>
                <p><Link target='_blank' href='https://gendotaiko.com/' className=' underline hover:decoration-jm-yellow hover:text-jm-red'>Gendo Taiko</Link></p>
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
            <div className='py-4'>
              <div id="context" className='text-xl py-4'>
                <h3 className='text-2xl font-semibold py-2 text-jm-blue'>Context</h3>
                <p className='text-base pb-4'>
                  Gendo Taiko is a collegiate Japanese drumming group that performs in and around Providence, RI. 
                  Due to the constantly evolving member body and repertoire, determining which members get to play each song is a challenge that
                  has been previously solved by a combination of spreadsheets and manual labor. A quick response to this challenge suggests an algorithmic solution and random
                  allocation. However, conducting user research revealed that performance leaders want to maintain some sort of manual control over the process due to scheduling constraints and personal preferences.
                  
                </p>
                <p className='text-base font-semibold italic'>
                  How can we create a system that reduces the challenge of this repeated task while still allowing for manual control?
                </p>
              </div>
              <div id="comparative-analysis" className='text-xl py-4'>
                <h3 className='text-2xl font-semibold py-2 text-jm-blue'>Comparative Analysis</h3>
                <p className='text-base'>
                  At the core of this problem is a clean <b>list aggregation system</b>. To find what would be the most useful for this task, I conducted research on a few different
                  list aggregator systems including Spotify&apos;s playlist creation, Abercrombie&apos;s favoriting feature, and CraftedNBA&apos;s player selection system. Across these systems,
                  a few essential features emerged:
                </p>
                <ul className='list-disc text-base pl-4'>
                  <li>Multiple add and remove routes</li>
                  <li>Filter and sort functionality</li>
                  <li>Informative cards</li>
                </ul>
                {/* <Image/> */}
              </div>
              <div id="sketching-wireframing" className='text-xl py-4'>
                <h3 className='text-2xl font-semibold py-2 text-jm-blue'>Sketching & Wireframing</h3>
                <p className='text-base pb-4'>
                  To begin the design process, I brainstormed different features that may prove useful. These sketches informed a low-fidelity wireframe. 
                </p>
                {/* Image */}
              </div>
              <div id="development" className='text-xl py-4'>
                <h3 className='text-2xl font-semibold py-2 text-jm-blue'>Development</h3>
                <p className='text-base pb-4'>
                  To create a proof-of-concept, I developed a simple React app that addresses the main target points. The app allows performance leaders
                  to first choose a song and be met with only members who know that song, <b className='italic'>simplifying the annoying cross-referencing task that existed before</b>. Further, they can view members
                  based on their class year and time in the club (gen), allowing them to balance the lineup based on the occasion. <b className='italic'>Now first-years can have their own dedicated
                  forays into the spotlight, and seniors can play their swan songs altogether</b>.
                </p>
                {/* Link to react app */}
                {/* <Link></Link> */}
              </div>
              <div id="section4" className='text-xl py-4'>
                <h3 className='text-2xl font-semibold py-2 text-jm-blue'>Learnings</h3>
                <p className='text-base pb-4'>
                  Gendo Taiko is a collegiate Japanese drumming group that performs in and around Providence, RI. 
                  Due to the constantly evolving member body and repertoire, determining which members get to play each song is a challenge that
                  has been previously solved by a combination of spreadsheets and manual labor. A quick response to this challenge suggests an algorithmic solution and random
                  allocation. However, conducting user research revealed that performance leaders want to maintain some sort of manual control over the process due to scheduling constraints and personal preferences.
                </p>
                <p className='text-base font-semibold italic'>
                  How can we create a system that reduces the challenge of this repeated task while still allowing for manual control?
                </p>
              </div>
              <div id="section5" className='text-xl py-4'>
                <h3 className='text-2xl font-semibold py-2 text-jm-blue'>Next Steps</h3>
                <p className='text-base pb-4'>
                  Gendo Taiko is a collegiate Japanese drumming group that performs in and around Providence, RI. 
                  Due to the constantly evolving member body and repertoire, determining which members get to play each song is a challenge that
                  has been previously solved by a combination of spreadsheets and manual labor. A quick response to this challenge suggests an algorithmic solution and random
                  allocation. However, conducting user research revealed that performance leaders want to maintain some sort of manual control over the process due to scheduling constraints and personal preferences.
                </p>
                <p className='text-base font-semibold italic'>
                  How can we create a system that reduces the challenge of this repeated task while still allowing for manual control?
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      
    </div>
  )
}
