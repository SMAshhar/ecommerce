'use client'
import Image from "next/image"
import Link from 'next/link'
import CartIcon from './cartIcon'

export default function Header() {

    return (
        <div className='flex w-full max-w-[1920px] text-rose-500'>
            {/* Meny for big screens */}
            <div className='flex w-full '>
                <div className=" flex bg-gradient-to-r from-rose-200 via-rose-50 to-rose-200 items-center justify-center w-full h-16">
                    <Link href={'/'} className='hidden md:flex text-lg italic text-center font-light mx-4' >
                        <div className='flex w-28 tracking-widest'> Pink Lotus</div>
                    </Link>
                    <div className='flex w-full items-center gap-6 justify-center'>
                        <Link href={'/'} className='hidden md:flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-md font-light outline-none hover:scale-105 tracking-widest'>Home</Link>
                        <div className="flex md:hidden">
                            <CartIcon />
                        </div>
                        <Link href={'/'}>
                            <div className='relative w-28 justify-center items-center flex'>
                                <Image src={'/logo.png'} alt="logo" width={100} height={100} className="flex px-2 absolute text-lg h-14 hover:scale-110 duration-300 w-20" />
                            </div>
                        </Link>
                        <Link href={'/tea'} className='flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-md outline-none hover:scale-105 font-light tracking-widest'>Tea</Link>
                    </div>
                    <div className='hidden md:flex items-end justify-end px-4'>
                        <CartIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}
