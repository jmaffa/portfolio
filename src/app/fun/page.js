import React from 'react'
import NavBar from '../../components/navbar'

export default function Fun() {
  return (
    <div className="flex flex-col min-h-screen font-merriweather">
        <NavBar/>
        <div className='pl-16'>
            <h1 className='text-jm-blue text-6xl'>Fun</h1>
        </div>
    </div>
  )
}
