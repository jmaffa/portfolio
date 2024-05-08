import React from 'react'

export default function NavBar() {
  return (
    <div className="w-full flex flex-row p-12 pt-6 text-xl font-bold">
            <div className='w-1/2 pl-4'>
                <div><a className="underline hover:text-jm-red hover:decoration-jm-yellow decoration-2" href="/">home</a></div>
            </div>
            <div className="w-1/2 flex flex-row underline decoration-jm-yellow justify-end font-bold">
                <div className="pl-0  w-1/4"><a className="underline hover:text-jm-red hover:decoration-jm-yellow decoration-2" href="/projects">projects</a></div>
                <div className="pl-4 w-1/4"><a className="underline hover:text-jm-red hover:decoration-jm-yellow decoration-2" href="/about">about</a></div>
                <div className="pl-4 w-1/4"><a className="underline hover:text-jm-red hover:decoration-jm-yellow decoration-2" href="/fun">fun</a></div>
                <div className="pl-4 w-1/4"><a className="underline hover:text-jm-red hover:decoration-jm-yellow decoration-2" href="/contact">contact me</a></div>
            </div>
        </div>
  )
}
