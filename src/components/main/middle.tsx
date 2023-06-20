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
        <div className='flex flex-col justify-center items-center py-20 md:px-24 bg-[url("/sakura.png")] bg-cover bg-center z-50 border-b-2 border-rose-300 h-screen'>
            <div className='flex w-full justify-start items-end px-4 md:px-10 xl:px-20 my-12 md:my-20'>
                <h2 className="text-2xl md:text-4xl 2xl:text-5xl font-light italic text-rose-400 mb-8">&quot;Tea is the </h2>
                <div className={`px-8 py-5 text-5xl md:text-8xl xl:text-8xl text-center ${cal.variable} font-cal text-rose-600`}>Air</div>
                <h2 className="text-2xl md:text-4xl 2xl:text-5xl font-light italic text-rose-400 mb-8">we Breath,</h2>
            </div>
            <div className='flex w-full justify-end items-end px-4 md:px-16 lg:px-20'>
                <h2 className="text-2xl md:text-4xl lg:text-6xl font-light italic text-rose-400 mb-8">Its the</h2>
                <div className={`px-8 py-5 text-5xl md:text-8xl xl:text-8xl text-center ${cal.variable} font-cal text-rose-600`}>Life</div>
                <h2 className="text-2xl md:text-4xl lg:text-6xl font-light italic text-rose-400 mb-8">we live&quot;</h2>
            </div>
        </div>
    )
}
