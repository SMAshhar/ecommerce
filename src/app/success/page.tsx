'use client'

import React from 'react'
import { useCookies } from 'react-cookie';
import localFont from '@next/font/local';
import Link from 'next/link';

const cal = localFont({
    src: [
        {
            path: '../../../public/fonts/Calligrapher-JRxaE.ttf',
            weight: '400'
        },
    ],
    variable: '--font-cal'
})

export default function Success() {
    const [cookies, setCookies, removeCookies] = useCookies(['products']);
    removeCookies('products');
    return (
        <div className="w-full bg-gradient-to-r from-rose-200 via-rose-50 to-rose-200 items-center justify-center flex flex-col">
            <div className="flex w-full justify-center items-center flex-col px-2 md:px-16 lg:px-56 pt-32 pb-14">
                <div className={`${cal.variable} font-cal text-rose-400 tracking-widest text-5xl md:text-7xl xl:text-9xl text-center font-light md:justify-start items-center flex`}>
                    Thank you for your patronage.
                </div>
            </div>
            <Link href='/' className='hover:underline pb-12 text-sm md:text-md text-rose-400 tracking-widest'>Click to return to homepage... </Link>
        </div>
    )
}
