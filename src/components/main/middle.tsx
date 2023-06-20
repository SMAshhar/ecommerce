import localFont from '@next/font/local'
import React from 'react'


const cal = localFont({
    src: [
        {
            path: '../../../public/fonts/Calligrapher-JRxaE.ttf',
            weight: '400'
        },
    ],
    variable: '--font-cal'
})

export default function Intro() {
    return (
        <div className='flex flex-col justify-center items-center py-20 md:px-24 bg-[url("/sakura.png")] bg-cover bg-center z-50'>
            <div className='flex w-full justify-start items-end px-20 my-20'>
                <h2 className="text-6xl font-light italic text-rose-400 mb-8">&quot;Tea is the </h2>
                <div className={`px-8 pt-14 py-5 text-8xl md:text-7xl xl:text-8xl text-center ${cal.variable} font-cal text-rose-600`}>Air</div>
                <h2 className="text-6xl font-light italic text-rose-400 mb-8">we Breath,</h2>
            </div>
            <div className='flex w-full justify-end items-end px-20'>
                <h2 className="text-6xl font-light italic text-rose-400 mb-8">Its the</h2>
                <div className={`px-8 pt-14 py-5 text-8xl md:text-7xl xl:text-8xl text-center ${cal.variable} font-cal text-rose-600`}>Life</div>
                <h2 className="text-6xl font-light italic text-rose-400 mb-8">we live&quot;</h2>
            </div>
        </div>
    )
}
