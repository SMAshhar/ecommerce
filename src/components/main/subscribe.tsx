import React from 'react'

export default function Subscribe() {
    return (
        <div className='bg-white text-rose-400 py-36 p-16 relative '>
            <div className="flex text-rose-100  w-full justify-center items-center text-9xl font-light bg-clip-text">
                <h1>Sign up and save</h1>
            </div>
            <div className='flex w-full h-full justify-center items-center flex-col absolute top-0 left-0 pt-10'>
                <div className='text-4xl font-light'>
                    Sign up and save
                </div>
                <div className='flex flex-col text-md py-4 tracking-widest font-light p-2'>
                Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
                    <div className='flex gap-2 py-8'>
                        <input placeholder='Input email address' className='p-2 text-xs border w-3/4 border-rose-400 border-spacing-1' />
                        <button className='px-4 py-2 w-1/4 leading-tight text-xs font-bold bg-rose-400 text-gray-100'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}